var age=18;
//if(age<13)
/*{
    console.log("minor");
}else if(age>=18){
    console.log("major");
}*/
//ternary operator
/*
age>=18?console.log("major"):console.log("minor");
function name(firstname,lastname){
    console.log(firstname+' '+lastname)
}
name('Divya','Raju');
//array
var name=["Divya","likhitha","chandana"];
console.log(name[2]);
console.log(name.length);
name.push("Dyuthi");
console.log(name.length);
name.unshift("Manjunath");
console.log(name.length);
console.log(name[4]);
console.log(name[0]);
name.pop();
console.log(name.length);
console.log(name);
*/
//Challenge 2
var bills=[124,48,268];
var tip=[0,0,0];
var amount=[0,0,0];

for(i=0;i<=2;i++)
{
    if(bills[i]<=50)
    {
        tip[i]=0.2*bills[i];
    }
    else if(bills[i]>50 && bills[i]<=200)
    {
        tip[i]=0.15*bills[i];
    }
    else if(bills[i]>200)
    {
        tip[i]=0.1*bills[i];
    }
    amount[i]=tip[i]+bills[i];
}
for(i=0;i<=2;i++)
{
    console.log(i+1+".bill :"+bills[i]+" amount:"+amount[i]+" tip:"+tip[i])
}

