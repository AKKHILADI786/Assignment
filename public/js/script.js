$(()=>{
    $('#content').load('html/add.html')
    $('#get_btn').click(()=>{
        $('#content').load('html/data.html')
        $.get('/s',(data)=>{
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
    $('#search_btn').click(()=>{
        let name=$('#search_menu').val();
        
        $('#content').load('html/data.html')

        $.post('/s/rorn',{
            name
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
    $('#add_btn').click(()=>{
        $('#content').load('html/add.html')
    })
    
})