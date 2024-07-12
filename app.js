const product1 = {
    name: 'Water',
    distributor: {
        name: 'Giraffe Water Company',
        address: {
            street: 'Phetchaburi',
            subdistrict: 'Thanonphetchaburi',
            district: 'Ratchathewi',
            province: 'Bangkok'
        }
    }
};
const product2 = {};

console.log(product1.distributor.address.province);
console.log(product2.distributor?.address?.province);
// ใช้ Optional chaining operator
// ในการเข้าถึง property ของ object ที่ไม่มีตัวตนโดยไม่ทำให้เกิด Error
// โดยถ้า Object นั้นๆ ไม่มี property ตัวที่เรียกใช้
// ก็จะ return ค่ากลับมาเป็น undefined
// แต่ถ้า Object นั้นๆ ไม่มี method ตัวที่เรียกใช้
// ก็จะ return ค่ากลับมาเป็น undefined หรือ null

// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining