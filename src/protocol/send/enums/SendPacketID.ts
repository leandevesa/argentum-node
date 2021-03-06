export enum SendPacketID { 
    Logged = 0,
    RemoveDialogs = 1,
    RemoveCharDialog = 2,
    NavigateToggle = 3,
    Disconnect = 4,
    CommerceEnd = 5,
    BankEnd = 6,
    CommerceInit = 7,
    BankInit = 8,
    UserCommerceInit = 9,
    UserCommerceEnd = 10,
    UserOfferConfirm = 11,
    CommerceChat = 12,
    ShowBlacksmithForm = 13,
    ShowCarpenterForm = 14,
    UpdateSta = 15,
    UpdateMana = 16,
    UpdateHP = 17,
    UpdateGold = 18,
    UpdateBankGold = 19,
    UpdateExp = 20,
    ChangeMap = 21,
    PosUpdate = 22,
    ChatOverHead = 23,
    ConsoleMsg = 24,
    GuildChat = 25,
    ShowMessageBox = 26,
    UserIndexInServer = 27,
    UserCharIndexInServer = 28,
    CharacterCreate = 29,
    CharacterRemove = 30,
    CharacterChangeNick = 31,
    CharacterMove = 32,
    ForceCharMove = 33,
    CharacterChange = 34,
    ObjectCreate = 35,
    ObjectDelete = 36,
    BlockPosition = 37,
    PlayMidi = 38,
    PlayWave = 39,
    GuildList = 40,
    AreaChanged = 41,
    PauseToggle = 42,
    RainToggle = 43,
    CreateFX = 44,
    UpdateUserStats = 45,
    WorkRequestTarget = 46,
    ChangeInventorySlot = 47,
    ChangeBankSlot = 48,
    ChangeSpellSlot = 49,
    Atributes = 50,
    BlacksmithWeapons = 51,
    BlacksmithArmors = 52,
    CarpenterObjects = 53,
    RestOK = 54,
    ErrorMsg = 55,
    Blind = 56,
    Dumb = 57,
    ShowSignal = 58,
    ChangeNPCInventorySlot = 59,
    UpdateHungerAndThirst = 60,
    Fame = 61,
    MiniStats = 62,
    LevelUp = 63,
    AddForumMsg = 64,
    ShowForumForm = 65,
    SetInvisible = 66,
    DiceRoll = 67,
    MeditateToggle = 68,
    BlindNoMore = 69,
    DumbNoMore = 70,
    SendSkills = 71,
    TrainerCreatureList = 72,
    GuildNews = 73,
    OfferDetails = 74,
    AlianceProposalsList = 75,
    PeaceProposalsList = 76,
    CharacterInfo = 77,
    GuildLeaderInfo = 78,
    GuildMemberInfo = 79,
    GuildDetails = 80,
    ShowGuildFundationForm = 81,
    ParalizeOK = 82,
    ShowUserRequest = 83,
    TradeOK = 84,
    BankOK = 85,
    ChangeUserTradeSlot = 86,
    SendNight = 87,
    Pong = 88,
    UpdateTagAndStatus = 89,
    SpawnList = 90,
    ShowSOSForm = 91,
    ShowMOTDEditionForm = 92,
    ShowGMPanelForm = 93,
    UserNameList = 94,
    ShowDenounces = 95,
    RecordList = 96,
    RecordDetails = 97,
    ShowGuildAlign = 98,
    ShowPartyForm = 99,
    UpdateStrenghtAndDexterity = 100,
    UpdateStrenght = 101,
    UpdateDexterity = 102,
    AddSlots = 103,
    MultiMessage = 104,
    StopWorking = 105,
    CancelOfferItem = 106,
    PACKET_COUNT = 107
}