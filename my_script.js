function my_func(){

    var mybool = true
    mybool = false

    MessageBox.information(mybool)

}

function my_funco(){
 
    var a = "😀"
    var b = "😁"
    
    var c = "fête du 🩲\!"
    
    MessageBox.information(c+a+b)
   
}

function myfunList(){

    var array = ["A","B","C"]
    MessageBox.information(array.indexOf("B"))

    var empty = []
    empty.push("D")
    MessageLog.trace(array + "," + empty)

}

function myAnagram(){
    var a = "camion" 
    var b = "olive"
    var c = "original"
    var d = "Large"

    MessageBox.information(a[0]+b[0]+c[0]+d[0])

}

function phrase(){

    var my_string = "the quick brown fox jumps over the lazy dog"
    var my_array = my_string.split(" ")
    var my_re_string = my_array.join("🦊")
    MessageBox.information(my_re_string)

}
/*
function my_char() {

    var char_data = {
        "name" : "Mario",
        "HP" : 100,
        "stamina":52,
        "weapon":{
            "name":"axe",
            "damage":30
        }
    }

MessageBox.information(char_data.)
*/

function my_char() {


    var marion_brain = {
        "current_brain_capacity":100,
        "damage_per_new_information":10
    }

    marion_brain.current_brain_capacity -= marion_brain.damage_per_new_information
    marion_brain.current_brain_capacity -= marion_brain.damage_per_new_information
    marion_brain.current_brain_capacity -= marion_brain.damage_per_new_information

    MessageBox.information(marion_brain.current_brain_capacity)

}

function my_plant(){

    var arbre = {
        "tronc" : 
        {"branche1" : { 
            "branche2" : {
                "fruits":["pomme1","pomme2"]},
           "branche3": {
                "fruits2" : ["pomme3","pomme4"]}
           }

            }
        }

    }


function HP_else(){

    var HP = 100

    var fire_ball_damage = 50
    var fire_bolt_damage = 200

    HP -= fire_ball_damage
    MessageBox.information("You're alive!")

    if(HP > 0){
        MessageBox.information("You're alive!")
    }else{
        MessageBox.information("You're dead...")}
}