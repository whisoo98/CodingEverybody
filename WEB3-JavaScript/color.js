function changeBackground(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
    }
}
        
var Body = {
    setBackgroundColor : function(backgroundColor) {
        var target = document.querySelector('body');  
        target.style.backgroundColor = backgroundColor;
    },
    setColor : function(Color){
        var target = document.querySelector('body');  
        target.style.color = Color;
    }
}

var Links= {
    setColor : function (aColor){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length){
            alist[i].style.color = aColor;
            i = i + 1;
        }
    }
}