from struct import *
import ctypes
import jsonpickle

c_uint8 = ctypes.c_uint8

class Dat_Flags_bits( ctypes.LittleEndianStructure ):
     _fields_ = [
                 ("layer1",     c_uint8, 1 ),  # asByte & 1
                 ("layer2",     c_uint8, 1 ),  # asByte & 2
                 ("layer3",     c_uint8, 1 ),  # asByte & 4
                 ("layer4",     c_uint8, 1 ),  # asByte & 8
                 ("trigger",    c_uint8, 1 ),  # asByte & 8
                ]

class Inf_Flags_bits( ctypes.LittleEndianStructure ):
     _fields_ = [
                 ("tileExit",     c_uint8, 1 ),  # asByte & 1
                 ("npcIndex",     c_uint8, 1 ),  # asByte & 2
                 ("objInfo",      c_uint8, 1 ),  # asByte & 4
                ]

class DatFlags( ctypes.Union ):
     _anonymous_ = ("bit",)
     _fields_ = [
                 ("bit",    Dat_Flags_bits ),
                 ("asByte", c_uint8    )
                ]

class InfFlags( ctypes.Union ):
     _anonymous_ = ("bit",)
     _fields_ = [
                 ("bit",    Inf_Flags_bits ),
                 ("asByte", c_uint8    )
                ]

class TileExit():
    aMap = 0
    x = 0
    y = 0

class ObjInfo():
    objIndex = 0
    amount = 0

class Tile():
    # Map
    blocked = False
    graphic1 = 0
    graphic2 = 0
    graphic3 = 0
    graphic4 = 0
    trigger = 0
    # Inf (Optionals)
    tileExit = False
    npcIndex = False
    objInfo = False

class Map():
    # Dat
    name = ""
    musicNumber = 0
    ground = 0
    zone = 0
    pk = False
    tiles = False

def get_byte(data):
    return unpack('<b', data.read(1))[0]

def get_integer(data):
    return unpack('<h', data.read(2))[0]

def get_long(data):
    return unpack('<i', data.read(4))[0]

def get_double(data):
    return unpack('<d', data.read(8))[0]

def get_string(data, length):
    return "".join(list(map(lambda x: x.decode("utf-8"), unpack('%sc' % length, data.read(length)))))

def get_dat_bit_flags(data):
    byFlags = get_byte(data)
    flags = DatFlags()
    flags.asByte = byFlags
    return flags

def get_inf_bit_flags(data):
    byFlags = get_byte(data)
    flags = InfFlags()
    flags.asByte = byFlags
    return flags

MIN_BOUNDS = 1
MAX_BOUNDS = 100


aMap = Map()

with open('mapa272.map', 'rb') as mapData:
    with open('mapa272.inf', 'rb') as mapInfo:

        tiles = [[0 for x in range(MAX_BOUNDS)] for y in range(MAX_BOUNDS)]

        # header
        mapVersion =  get_integer(mapData)
        descr = get_string(mapData, 255)
        crc = get_long(mapData)
        magicWord = get_long(mapData)

         # bit skipping
        get_double(mapData)
        get_double(mapInfo)
        get_integer(mapInfo)

        for x in range(MAX_BOUNDS):
            for y in range(MAX_BOUNDS):
        
                tile = Tile()
                
                dat_flags = get_dat_bit_flags(mapData)

                if dat_flags.layer1:
                    tile.blocked = True
                
                tile.graphic1 = get_integer(mapData)

                if dat_flags.layer2:
                    tile.graphic2 = get_integer(mapData)

                if dat_flags.layer3:
                    tile.graphic3 = get_integer(mapData)

                if dat_flags.layer4:
                    tile.graphic4 = get_integer(mapData)

                if dat_flags.trigger:
                    tile.trigger = get_integer(mapData)

                inf_flags = get_inf_bit_flags(mapInfo)

                if inf_flags.tileExit:
                    tile.tileExit = TileExit()
                    tile.tileExit.aMap = get_integer(mapInfo)
                    tile.tileExit.x = get_integer(mapInfo)
                    tile.tileExit.y = get_integer(mapInfo)

                if inf_flags.npcIndex:
                    tile.npcIndex = get_integer(mapInfo)

                if inf_flags.objInfo:
                    tile.objInfo = ObjInfo()
                    tile.objInfo.objIndex = get_integer(mapInfo)
                    tile.objInfo.amount = get_integer(mapInfo)
                    
                tiles[x][y] = tile

        aMap.tiles = tiles

dat_lines = [line.rstrip('\n').rstrip('\r').strip() for line in open('mapa272.dat')]

for idx,line in enumerate(dat_lines):
    if line.startswith("Name") > 0:
        aMap.name = line[5:]
    elif line.startswith("MusicNum") > 0:
        aMap.musicNumber = int(line[9:])
    elif line.startswith("Terreno") > 0:
        aMap.ground = line[8:]
    elif line.startswith("Zona") > 0:
        aMap.zone = line[5:]
    elif line.startswith("Pk") > 0:
        aMap.pk = bool(int(line[3:]))
        
mapJSON = jsonpickle.encode(aMap, unpicklable=False)

with open("mapa272.json", "w") as out:
    out.write(mapJSON)