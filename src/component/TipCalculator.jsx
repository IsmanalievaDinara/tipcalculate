import React from 'react'

class TipCalculator extends React.Component{
    constuctor(){
        super()
        this.state=({
            billAmount:0,
            service:0.3,
            people:0
        })
    }
    onChangeBillAmount(el){
        let amount = isNan(e.target.value)
        this.setState({billAmount: e.target.value})
    }
    calculateTheTip(e){
        e.preventDefault()
        let tip = (this.state.billAmount * this.state.service) / this.state.people).toFixed(2)

        this.setState({tip})

    }
    render(){
        return(<>
        <form onSubmit={(e)=> this.calculateTheTip(e)}>
            <div>
            <p>How much was your bill?</p>
            <input type="number" stop="0.5" min="0" value={this.state.billAmount}onChange={() =>this.onChangeBillAmount(el)}/>
            </div>
            <div>
                <select value={this.state.service} onChange={(e) => this.onChangeService(e)}>
                    <option value="0.3 ">30% Great</option>
                    <option value="0.2" >20% good</option>
                    <option value="0.15" >15% ok</option>
                    <option value="0.1" >10% bad</option>
                </select>

            </div>
            <div>
                <p>How many people are sharing the bill?</p>
                <input type="number" step="1" min="1" value={this.state.people} onChange={(e)=> this.onchangePeople(e)} />
            </div>
            <button >Calculate</button>
        </form>
        <h2>the tip is {this.state.tip}</h2>
        </>)
    }
}

export default TipCalculator