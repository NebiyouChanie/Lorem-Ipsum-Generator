const text =[
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Laudantium possimus consequuntur, voluptate odit nulla
    exercitationem deserunt iste! Nobis reprehenderit ullam,
    quam minus totam exercitationem, ab tenetur maiores incidunt 
    nisi, deleniti harum veniam amet obcaecati rerum. Aliquid, 
    cum dicta! Earum minima debitis sint aliquid? Veniam soluta 
    maxime sit recusandae incidunt eum accusamus itaque,
    ad.` ,

    `Accusantium fuga placeat rem, pariatur cupiditate,
    perspiciatis nisi iure explicabo nostrum aut. Saepe 
    aliquam a quae necessitatibus voluptas ullam maxime odio 
    corporis ea! Officia, eius facere? Ratione, soluta omnis
    consequatur qui ut corporis similique animi assumenda! 
    Minus magnam eum nostrum quia quibusdam quasi blanditiis 
    maxime quae nam inventore doloribus assumenda 
    cumque ad sapiente, alias ipsa nihil enim. `,

    `Consequuntur alias maiores ipsum earum officia 
    libero ex officiis ipsam rem ipsa delectus 
    facilis impedit ratione possimus dicta aperiam 
    culpa, ducimus quasi amet cupiditate pariatur 
    ab. Possimus aspernatur provident voluptates, 
    dolorem repudiandae eligendi assumenda at nostrum 
    blanditiis ipsum, dicta natus consequatur ullam.`,

    `As cum impedit nemo quas blanditiis officia animi,
    voluptas debitis incidunt nihil magnam non tempora
    modi dolore dolorem voluptates. Saepe ut tenetur 
    doloremque quidem? Esse doloremque non debitis 
    similique explicabo ut magni, sint recusandae 
    nostrum sequi mollitia dolorum tempore omnis qui, 
    dignissimos assumenda vero quaerat. Temporibus, 
    animi libero.`
    ]
    const form =document.querySelector('.lorem-form')
    const generate =document.querySelector('.btn')
    const result =document.querySelector('.lorem-text')
    const amount=document.getElementById('amount')
    form.addEventListener('submit',function(e){
        e.preventDefault()
        const value=parseInt(amount.value)
        const random=Math.floor(Math.random()*text.length)



        if (isNaN(value) || value<=0 || value >4){
            result.innerHTML=`<p class="result">${text[random]}</p>`
        }else{
            let temptext = text.slice(0,value);
            temptext=temptext.map(function(item){
                return `<p class=result>${item}</p>`;
            }).join("");
            result.innerHTML=temptext;

        }
    });