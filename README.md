# socket_programming homework 240-311 client / sever
how to run
```
node <file_name.js> 
node server.js
```
# หลักการทำงานของ code
เมื่อ Client เชื่อมต่อกับ sever สำเร็จแล้ว (sever accept แล้ว) Client จะส่งข้อมูลไปยัง server ที่เชื่อมต่ออยู่ด้วย ซึ่งข้อมูลที่ส่งก็คือ ชื่อที่อยู่ในตัวแปร name แล้วก็ส่งโดยใช้ client.write แล้วก็ไปที่ฝั่ง Sever Sever นอกจากจะ accept connection แล้ว sever ก็คอยฟังไปเรื่อยๆเมื่อเห็นว่ามี data เข้ามาก็ส่ง data ไปให้กับ client ทุกตัวที่เชื่อมอยู่กับ sever ยกเว้นตัวผู้ส่ง เพราะมีการเก็บค่า socket ของ client ไว้ใน clients ทำให้สามารถรู้ได้ว่า socket ของแต่ละ client คืออะไรซึ่งแต่ละ client จะมี socket เป็นของตัวเองไม่ซ้ำกัน เราก็พอจะอนุมานได้ว่า socket ที่ไม่ใช่ socket ที่ส่ง data มาคือ client ตัวอื่นๆในระบบ แล้วก็ส่งข้อความไปยัง client อื่นๆในระบบว่า socket ที่ส่งข้อความมาก็คือ client ใหม่ที่เพิ่งเข้ามานั้นเอง (เอาชื่อจาก data ที่ได้จาก socket ไปส่งให้ client อื่นๆ) แล้วเมื่อ client ตัวใดตัวหนึ่งจะออกจาก sever ก็จะได้นับ socket ว่า “close” ก็จะใช้วิธีการเดียวกับการบอกว่า client is join แต่เปลี่ยนข้อความที่ส่งไปเป็น client is out แทน

# sequence diagram
![Untitled Diagram](https://user-images.githubusercontent.com/89448778/227520858-d62bee6e-3b00-4363-8590-28f9528933d3.jpg)

# example picture
- start server
![Screenshot_20230106_115154](https://user-images.githubusercontent.com/89448778/227521650-55ebe6cb-f9a7-41bb-a052-d36c9f11b2b0.png)
- start client_A
![Screenshot_20230106_115208](https://user-images.githubusercontent.com/89448778/227521683-973b647b-1964-4a7b-ab1a-7ab1954dacb0.png)
- start clinet_B
![Screenshot_20230106_115230](https://user-images.githubusercontent.com/89448778/227521789-0f385c45-1ed0-4504-bb10-a064e31eb9b8.png)
- start clinet_C
![Screenshot_20230106_115302](https://user-images.githubusercontent.com/89448778/227521884-092e0914-4e1e-474f-a73d-4b792fac6f1e.png)
- clinet_C disconnected
![Screenshot_20230106_115320](https://user-images.githubusercontent.com/89448778/227522075-919ffa00-a3dc-4a3e-9390-05471d9a5ab7.png)
- clinet_B disconnected
![Screenshot_20230106_115335](https://user-images.githubusercontent.com/89448778/227522184-14ec2228-c1b9-4d3a-a938-9449a766431d.png)
- stop server
![Screenshot_20230106_115357](https://user-images.githubusercontent.com/89448778/227522258-f91dadec-adb3-4495-9dc9-742f4d7118bb.png)
