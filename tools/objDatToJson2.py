firstLower = lambda s: s[:1].lower() + s[1:] if s else ''

lines = [line for line in open('objToTransf2.json')]
openForbidden = False

def find_nth(haystack, needle, n):
    start = haystack.find(needle)
    while start >= 0 and n > 1:
        start = haystack.find(needle, start+len(needle))
        n -= 1
    return start

with open('transformed2.json', 'w') as f:
    for idx,line in enumerate(lines):
        if line.find("forbiddenClass") > 0:
            if not openForbidden:
                f.write('"forbiddenClasses": [\n')
                openForbidden = True

            forbiddenClassTrimIndexB = find_nth(line, '"', 3) + 1
            forbiddenClassTrimIndexE = find_nth(line, '"', 4)
            forbiddenClass = line[forbiddenClassTrimIndexB:forbiddenClassTrimIndexE]

            lastChar = ''
            if (idx + 1) < len(lines):
                if lines[idx + 1].find("forbiddenClass") > 0:
                    lastChar = ","

            f.write('"' + forbiddenClass + '"' + lastChar + "\n")
        else:
            if openForbidden:

                lastChar = ''
                if lines[idx].find("}") == -1:
                    lastChar = ","

                f.write("]" + lastChar + "\n")
                openForbidden = False
            f.write(line)