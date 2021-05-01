$(()=>{ 
    $('#getdata').click(()=>{

        let name=$('#username').val();
        if(name=="") {
            window.alert('Enter the name')
            return;
        }
        let roll=$('#roll_number').val();
        if(roll=="") {
            window.alert('Enter the Roll_number')
            return;
        }
        $('#content').load('html/data.html')

        $.post('/s/randn',{
            name,roll
        },(data)=>{
            $('#empty_col').empty();
        let a=0;
        for(p of data){
            a++;
        $('#product_items').append(`
        <div class="row items" id="empty_col">
        <div class="col-md-1 py-2 text-centery">
            ${a}
        </div>
        <div class="col-md-4  py-2 text-center ">
            ${p.Name}
        </div>
        <div class="col-md-4  py-2 text-center ">
            ${p.Roll_no}
        </div>
        <div class="col-md-3  py-2 text-center ">
            ${p.Class}
        </div>
    </div>
        `);

        }
            
        })
    })


})