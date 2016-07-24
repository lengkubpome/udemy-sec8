
export interface Post{
    userId: number;
    id?: number; // ? => ทำให้สามารถกำหนดให้เป็นค่าว่างได้ในเวลานำไปใช้
    title : string;
    body: string;

}