function diffDate(date) {
    var today = new Date();
    var diffYear = Math.abs(today.getFullYear() - date.getFullYear())
    if (diffYear == 1) {
        diffYear = 0 
    } else {
        diffYear -= 1      
    }
    var diffMonth = today.getMonth() - date.getMonth() + 1
    if (diffMonth < 0) {
        diffMonth = 12 + diffMonth
    }
    var diffDay = today.getDate() - date.getDate()
    if (diffDay < 0) {
        diffDay = 31 + diffDay
        diffMonth -=1
    }    
    var diffHours = today.getHours() - date.getHours()
    var diffMinutes = today.getMinutes() - date.getMinutes()    
    return [diffYear, diffMonth, diffDay, diffHours, diffMinutes];
}

function hi() {       
    var id = window.open("","example","width=500, height=250");
    id.focus(); 
    id.document.open();

    var dDate = diffDate(new Date(document.forma.god.value, document.forma.mes.value, 
    document.forma.chislo.value));
        
    id.document.write("<h1 style='font-family: Lucida; color: olive;' >Вітаємо :)</h1>");        
    id.document.write("<div style='font-size: 20px; font-style: italic; font-weight: bold;'>" 
    +document.forma.fam.value + " "
    +document.forma.name.value + " "
    +document.forma.otch.value + " " +"</div><br>");
    id.document.write("<div> Ваша дата народження: " 
    +document.forma.chislo.value + "/" 
    +document.forma.mes.value + "/" 
    +document.forma.god.value + "</div>" );
    id.document.write("<div> З дня народження пройшло: " 
    + dDate[0] + " років " + dDate[1] + " місяців " + dDate[2] + " днів " + dDate[3] + " годин " 
    + dDate[4] + " хвилин " + "</div>");
    id.document.write("<div> До досягнення 100 річчя: " 
    + (100-dDate[0]-1) + " років " + (12-dDate[1]) + " місяців " + (31-dDate[2]) + " днів " 
    + (24-dDate[3]) + " годин " + (60-dDate[4]) + " хвилин " + "</div>");
    id.document.write("<button id='butt' onclick='window.close();'> Закрити вікно </button>");
    id.document.close();
}

function CheckAge (chislo)
{
    if (chislo>=1 && chislo<=31 && chislo.length == 2 && chislo<new Date())
    return chislo;
    else
    alert("Помилка при вводі, спробуйте ще раз!");
}
function CheckValue (mes)
{
    if (mes>=1 && mes<=12 && mes.length == 2 && mes<new Date())
    return mes;
    else
    alert("Помилка при вводі, спробуйте ще раз!");
}
function CheckDate (god)
{
    if (god>=1900 && god<=2021 && god.length == 4 && god<new Date())
    return god;
    else
    alert("Помилка при вводі, спробуйте ще раз!");
}