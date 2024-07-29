class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;

        List<Integer> result = new ArrayList<>();

        int startRow = 0;
        int startCol = 0;
        int lastRow = m - 1;
        int lastCol = n - 1;

        int count = m * n;

        while(count > 0){
            // startRow
            for(int i = startCol; i <= lastCol; i++){
                result.add(matrix[startRow][i]);
                count--;
            }
            startRow++;
            if(count == 0) break;

            // last Col
            for(int i = startRow; i <= lastRow; i++){
                result.add(matrix[i][lastCol]);
                count--;
            }
            lastCol--;
            if(count == 0) break;

            // last row
            for(int i = lastCol; i >= startCol; i--){
                result.add(matrix[lastRow][i]);
                count--;
            }
            lastRow--;
            if(count == 0) break;

            // start col
            for(int i = lastRow; i >= startRow; i--){
                result.add(matrix[i][startCol]);
                count--;
            }
            startCol++; 
            if(count == 0) break;
        }

        return result;

    }
}