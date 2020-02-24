class PressMe extends React.Component {
    constructor() {
        super();
        this.state = { pressed: false };
    }

    render() {
        return(
            <div>
                <button onClick={() => (this.setState({pressed: true }))}>
                    Press Me!</button>
        <label>{this.state.pressed ? 'Button already pressed!' : 'Button not pressed yet'}</label>
            </div>
        )
    }