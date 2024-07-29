class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;

        for(int col = 0; col < n; col++){
           int i = 0; // first row
           int j = n- 1; // last row;

           while(i <= j){
               int temp = matrix[i][col];
               matrix[i][col] = matrix[j][col];
               matrix[j][col] = temp;
               i++;
               j--;
           }
        }

        for(int i = 0; i < n; i++){
            for(int j = i + 1; j < n; j++){
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
}