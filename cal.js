        var final = "";
        text = document.getElementById('text');
        clear = document.getElementById('clear');
        del = document.getElementById('del');
        clear.addEventListener("click",function()
        {
            text.value="";
            final="";
        });
        const get=(para)=>{
            text.value+=para;
            final=text.value;
        }
        del.addEventListener("click",function(){
           text.value=text.value.substring(0,text.value.length-1) 
        });
        evaluate=document.getElementById('eval');
        evaluate.addEventListener("click",function(){
            var ans=eval(final);
            text.value=ans;
        });