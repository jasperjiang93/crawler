var casper = require('casper').create();
var fs = require('fs');

var rate = [];
var names = [];
var output = [];
var HP = [];
var ATK = [];
var DEF = [];
var SPD = [];
var A_HP = [];
var A_ATK = [];
var A_DEF = [];
var A_SPD = [];
function outputJson(){
    rate = rate.filter(Number);
    for(i=0;i<rate.length;i++){
        output.push({
            星级: rate[i],
            名字:names[i],
            血量: HP[i],
            攻击: ATK[i],
            防御: DEF[i],
            移速: SPD[i],
            觉醒血量:A_HP[i],
            觉醒攻击: A_ATK[i],
            觉醒防御: A_DEF[i],
            觉醒移速: A_SPD[i]
        })
    }

  return JSON.stringify(output);
}

function getRate(){
    var  rate = document.querySelectorAll('.rating');
    return Array.prototype.map.call(rate,function(e){
        return e.getAttribute('data-sort-value');
    })
};

function getName(){
    var  names = document.querySelectorAll('.icon');
    return Array.prototype.map.call(names,function(e){
        return e.getAttribute('data-sort-value');
        // this.echo();
    })
};
function getStat4(number){
    var  names = document.querySelectorAll('.searchable td:nth-of-type(4)');
    return Array.prototype.map.call(names,function(e){
        return e.textContent;
        // this.echo();
    })
};
function getStat5(number){
    var  names = document.querySelectorAll('.searchable td:nth-of-type(5)');
    return Array.prototype.map.call(names,function(e){
        return e.textContent;
        // this.echo();
    })
};
function getStat6(number){
    var  names = document.querySelectorAll('.searchable td:nth-of-type(6)');
    return Array.prototype.map.call(names,function(e){
        return e.textContent;
        // this.echo();
    })
};
function getStat7(number){
    var  names = document.querySelectorAll('.searchable td:nth-of-type(7)');
    return Array.prototype.map.call(names,function(e){
        return e.textContent;
        // this.echo();
    })
};
function getStat8(number){
    var  names = document.querySelectorAll('.searchable td:nth-of-type(8)');
    return Array.prototype.map.call(names,function(e){
        return e.textContent;
        // this.echo();
    })
};
function getStat9(number){
    var  names = document.querySelectorAll('.searchable td:nth-of-type(9)');
    return Array.prototype.map.call(names,function(e){
        return e.textContent;
        // this.echo();
    })
};
function getStat10(number){
    var  names = document.querySelectorAll('.searchable td:nth-of-type(10)');
    return Array.prototype.map.call(names,function(e){
        return e.textContent;
        // this.echo();
    })
};
function getStat11(number){
    var  names = document.querySelectorAll('.searchable td:nth-of-type(11)');
    return Array.prototype.map.call(names,function(e){
        return e.textContent;
        // this.echo();
    })
};
casper.start('https://summonerswarskyarena.info/monster-stat-database/', function() {
    rate = this.evaluate(getRate);
});
casper.then(function(){
    names = this.evaluate(getName);

});
casper.then(function(){
    HP = this.evaluate(getStat4);
});
casper.then(function(){
    ATK = this.evaluate(getStat5);
});
casper.then(function(){
    DEF = this.evaluate(getStat6);
});
casper.then(function(){
    SPD = this.evaluate(getStat7);
});
casper.then(function(){
    A_HP = this.evaluate(getStat8);
});
casper.then(function(){
    A_ATK = this.evaluate(getStat9);
});
casper.then(function(){
    A_DEF = this.evaluate(getStat10);
});
casper.then(function(){
    A_SPD = this.evaluate(getStat11);
});

casper.run(function(){
    this.echo("at run");
    var data = outputJson();
    fs.write('data.json',data,'w');
    this.echo("DONE!").exit();
})
