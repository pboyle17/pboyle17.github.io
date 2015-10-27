Hello my name is Paul Boyle.

I was born and raised in Chicago, Il

These are some of the things I learned today:


```
var makeBoard=function (x,y,rows){
  var fisrtRow=x+y+x+y+x+y+x+y;
  var secondRow=y+x+y+x+y+x+y+x;

  for(var x=0;x<=rows;x++){
      if (x%2==0){
        console.log(fisrtRow);
      }
      if (x%2==1){
        console.log(secondRow);
      }
  }
    return;
};
makeBoard(' ','#',8);


var makeTriangle = function (rows,string) {
    for(var x=1; x<= rows;x++){
      console.log(string.repeat(x));
    }
};


for(var x=1; x<= 7; x++){
  var string='';
  for(y=1 ; y<=x ; y++){
     string+='#';

  }
  console.log(string);
}

```

[so yah I am totally in love with this song right now:](https://www.youtube.com/watch?v=J4AVo_6OuNI)

People|Age|height
---|---|---|
Paul|28|5'9"
Dana|28|5'2"
Christian|25|5'10"
