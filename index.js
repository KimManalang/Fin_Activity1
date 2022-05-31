const contacts = [
    {
        name: 'Harry Potter',
        imgUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg',
        phone: '+63 9123 234 456',
        email: 'harrypotter@gnc.edu.ph'
    },
    {
        name: 'Michael Jordan',
        imgUrl: 'https://hoopshype.com/wp-content/uploads/sites/92/2021/11/i_1f_b0_57_michael-jordan.png?w=1000&h=600&crop=1',
        phone: '+63 9123 456 789',
        email: 'michaeljordan@gnc.edu.ph'
    },
    {
        name: 'John Doe',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhleDZapHPxuvvqWnMFOkQ6xTuPYUTCLTSOxLMxTzAgpyeifNXtlD_o1-83uBj7fCgtI&usqp=CAU',
        phone: '+63 9123 789 456',
        email: 'johndoe@gnc.edu.ph'
    },
    {
        name: 'Jane Doe',
        imgUrl: 'https://us.123rf.com/450wm/apoev/apoev1901/apoev190100092/126178797-person-gray-photo-placeholder-woman-in-costume-on-gray-background.jpg',
        phone: '+63 9123 234 789',
        email: 'janedoe@gnc.edu.ph'
    },
    {
        name: 'Kimberly Manalang', // this should be your name
        imgUrl: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/283772779_129001536440078_6826643808747404941_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEES-q5d8i7deN8qTZAaIfeMT86rVmWUNsxPzqtWZZQ20b0cYrMZy22hayDHAfXZo1cmTAYtRQQ56K558HivPep&_nc_ohc=p-sKzsJ1dRkAX-5xeKt&_nc_ht=scontent.fcrk1-3.fna&oh=00_AT-x4wziVWUtlXI1zuSDBN6iHUG6VH2JofGqmt2N_Z8vLw&oe=629AE50D',
        phone: '+63 905 232 2324',
        email: 'kimberly.manalang@gnc.edu.ph' // this should be your gnc email
    }
];




function CardName(props){
    return(
        <div>
            <h1>CONTACT LISTS</h1>
            
            <img src={props.imgUrl}></img>
            <h2>{props.name}</h2>     
            <p>{props.phone}</p>     
            <p>{props.email}</p>  
           
            <img src={props.imgUrl1}></img>              
            <h2>{props.name1}</h2> 
            <p>{props.phone1}</p>
            <p>{props.email1}</p>

            <img src={props.imgUrl2}></img>              
            <h2>{props.name2}</h2> 
            <p>{props.phone2}</p>
            <p>{props.email2}</p>


            <img src={props.imgUrl3}></img>              
            <h2>{props.name3}</h2> 
            <p>{props.phone3}</p>
            <p>{props.email3}</p>


            <img src={props.imgUrl4}></img>              
            <h2>{props.name4}</h2> 
            <p>{props.phone4}</p>
            <p>{props.email4}</p>

        </div>
    );
};
 


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <div>
        <div>
            <CardName 
                
                name = {contacts[0].name}
                imgUrl= {contacts[0].imgUrl}
                phone = {contacts[0].phone}
                email = {contacts[0].email}
        
                name1 = {contacts[1].name}
                imgUrl1= {contacts[1].imgUrl}
                phone1 = {contacts[1].phone}
                email1 = {contacts[1].email}
        
                name2 = {contacts[2].name}
                imgUrl2= {contacts[2].imgUrl}
                phone2 = {contacts[2].phone}
                email2 = {contacts[2].email}
         
                name3 = {contacts[3].name}
                imgUrl3= {contacts[3].imgUrl}
                phone3 = {contacts[3].phone}
                email3 = {contacts[3].email}
         
                name4 = {contacts[4].name}
                imgUrl4= {contacts[4].imgUrl}
                phone4 = {contacts[4].phone}
                email4 = {contacts[4].email}
            />
        </div>

    </div>

)