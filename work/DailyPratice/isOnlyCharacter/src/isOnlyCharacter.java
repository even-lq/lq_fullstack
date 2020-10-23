public class isOnlyCharacter {
    /*public static boolean isUnique(String str) {
        for (int i = 0; i < str.length(); i++) {
            if(str.lastIndexOf(str.charAt(i)) != i)
                return false;
        }
        return true;
    }*/
    public static boolean isUnique(String str) {
        int mark = 0;
        for (int i = 0; i < str.length(); i++) {
            int move_bit = (int)str.charAt(i) - 97;
            if((mark & (1 << move_bit)) != 0)
                return false;
            else
                mark = mark | (1 << move_bit);
        }
        return true;
    }
    public static void main(String[] args) {
        String str = "abcd";
        //String str = "abcdefa";
        System.out.println(isOnlyCharacter.isUnique(str));

    }
}
