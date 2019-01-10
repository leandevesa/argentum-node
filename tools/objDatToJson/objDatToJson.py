firstLower = lambda s: s[:1].lower() + s[1:] if s else ''

lines = [line.rstrip('\n').rstrip('\r').strip() for line in open('objToTransf.dat')]
openBracket = False

with open('transformed.json', 'w') as f:
    f.write("{\n")
    for idx,line in enumerate(lines):
            comment = ''
            if len(line) == 0:
                if openBracket:
                    f.write("},")
                openBracket = False
            elif line[0] == "[":
                openBracket = True
                bracketIndex = line.find("]")
                bracketTrimIndex = -(len(line) - bracketIndex)
                id = line[4:bracketTrimIndex]
                if line.find("'") > 0:
                    quoteIndex = line.find("'")
                    comment = line[(quoteIndex + 1):]
                f.write('"' + id + '": {\n')
                if len(comment) > 0:
                    f.write('"_comment": "' + comment + '",\n')
            elif line[0] != "'":
                equalsIndex = line.find("=")

                fieldNameTrimIndex = -(len(line) - equalsIndex)
                fieldName = firstLower(line[:fieldNameTrimIndex])

                fieldValueTrimIndex = equalsIndex + 1
                fieldValue = line[fieldValueTrimIndex:]
                
                try:
                    tmp = int(fieldValue)
                    isInt = True
                except ValueError:
                    isInt = False

                lastChar = ''
                if (idx + 1) < len(lines):
                    if len(lines[idx + 1]) > 0:
                        lastChar = ","

                if isInt:
                    transformed = '"' + fieldName + '": ' + fieldValue + lastChar
                else:
                    transformed = '"' + fieldName + '": "' + fieldValue + '"' + lastChar

                f.write("%s\n" % transformed)
    f.write("}")