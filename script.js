const ax2Page = document.getElementById('ax2');
const bxPage = document.getElementById('bx');
const cPage = document.getElementById('c');
const answer = document.getElementById('answer')

const filedData = (a, b, c) => { 

    if (a.length === 0 || b.length === 0 || c.length === 0 )  return false 
     
    else   return true  
    
}

function bhaskara() {

    if (filedData(ax2Page.value, bxPage.value, cPage.value)) { 
    const a = Number(ax2Page.value)
    const b = Number(bxPage.value)
    const c = Number(cPage.value)
    

    const bSquare = b ** 2 
    const aTimesC = a * c
    const times4 = 4 * aTimesC
    const delta = bSquare - times4

    const deltaTheSquare = Math.sqrt(delta)
    const calculatingA = 2 * a

    const xLineAccount = -b +  deltaTheSquare 
    const xLineResult = xLineAccount / calculatingA

    const xTwoLineAccont = -b - deltaTheSquare
    const xTwoLineResult = xTwoLineAccont / calculatingA

    if (deltaTheSquare) { 
    document.getElementById('page-center').style.height ='90vh'                                                      



    answer.innerHTML = `Δ = (b)² -4 * a * c <br>
                        Δ = (${b})² -4 * ${a} * ${c} <br>
                        Δ = ${bSquare} - 4 * ${aTimesC} <br>
                        Δ = ${bSquare} - ${times4} <br>
                        Δ = ${delta} <br>
                        <br>
                        x' = -(${b}) +√${delta}  = <div id="space"></div> ${xLineAccount.toFixed(3).replace('.' , ',')} =  <div id= "space"></div> ${xLineResult.toFixed(3).replace('.' , ',')} 
                        <div id="line"> </div>
                        <div id= "multiplicationAdjustment">2 * ${a} =</div> <div id="multiplicationAdjustmentResult">${calculatingA}</div> 
                        <br>
                        <br>
                        x'' = -(${b}) - √${delta} = <div id="space"></div> ${xTwoLineAccont.toFixed(3).replace('.' , ',')} = <div id="space"></div> ${xTwoLineResult.toFixed(3).replace('.' , ',')} 
                        <div id="line"></div>
                        <div id= "multiplicationAdjustment">2 * ${a} =</div> <div id="multiplicationAdjustmentResult">${calculatingA}</div> 
                        </div>
                        `                   
    } else {
        answer.innerHTML = 'Delta negativo'
        document.getElementById('page-center').style.height = '35.5vh'
    }

    } else {
        alert('[ERRO] Preencha os valores para continuar')
    }

    ax2Page.value = ''
    bxPage.value = ''
    cPage.value = ''   
}