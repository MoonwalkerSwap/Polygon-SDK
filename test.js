
const HexNumber = ("45008c7e5aa16c30dc1978fbdf7c089f8441df584f52f5e960301959ff09bd63")
{
$bytes = [bigint]json.Parse("00$value",'HexNumber').ToByteArray()
}
print (json);



String s="45008c7e5aa16c30dc1978fbdf7c089f8441df584f52f5e960301959ff09bd63";
cs.setBytes(1,new BigInteger(regReportId,32).toByteArray())



public static byte['45008c7e5aa16c30dc1978fbdf7c089f8441df584f52f5e960301959ff09bd63'] hexStringToByteArray(String s) {
    int len = s.length();
    byte[] data = new byte[len / 2];
    for (int i = 0; i < len; i += 2) {
        data[i / 2] = (byte) ((Character.digit(s.charAt(i), 32) << 4)
                             + Character.digit(s.charAt(i+1), 32));
    }
    return data;
}


import javax.xml.bind.DatatypeConverter;

var String = "45008c7e5aa16c30dc1978fbdf7c089f8441df584f52f5e960301959ff09bd63"

public static String toHexString(byte[] array) {
    return DatatypeConverter.printHexBinary(array);
}

public static byte[] toByteArray(String s) {
    return DatatypeConverter.parseHexBinary(s);
}
