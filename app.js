var getcheckbox = document.getElementById('toggle-checkbox');
var getchecklabel = document.getElementById('toggle-label');
var getbasic = document.getElementById('basic');
var getprof = document.getElementById('prof');
var getmst = document.getElementById('mst');

getchecklabel.addEventListener('click',function(){
    // console.log('i am working');
    if(getcheckbox.checked){
        [getbasic.textContent,getprof.textContent,getmst.textContent] = [10,20,30]

    }else{
        getbasic.textContent = 120;
        getprof.textContent = 240;
        getmst.textContent = 360;
    }
})