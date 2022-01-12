class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");
        this._currentDate;
        this.initialize();
        this.displayDateTime();
        this.initButtonsEvents();

    }

    initialize(){

        setInterval(()=>{

            this.displayDateTime();

        }, 1000)

    }

    addEventListenerAll(element, events, fn){

        //Split = Transforma string em array

        events.split(' ').forEach(event=>{

            element.addEventListener(event, fn, false);

        })

    }

    execBtn(value){

        switch(value){

            case 'ac':

                

                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag', e=>{

                let textBtn = console.log(btn.className.baseVal.replace("btn-", ""));

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e=>{

                btn.style.cursor = 'pointer';

            })
        });

    }

    displayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){
        
        return this._timeEl.innerHTML;

    }

    set displayTime(value){
        
        this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }
    
    set displayDate(value){
        
        this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date;

    }

    set currentDate(value){

        this._currentDate = value;

    }

}