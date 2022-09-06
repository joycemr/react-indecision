class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Thing 1', 'Thing 2', 'Thing 4']
        }
    }

    handlePick() {
        alert (this.state.options[Math.round(Math.random() * this.state.options.length)])
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {options: []}
        })
    }

    handleAddOption(option) {
        const options = this.state.options.concat(option);
        this.setState({options});
    }

    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {

    render() {
        return (
            <div id='header'>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }

}

class Action extends React.Component {

    render() {
        return (
            <div id='action'>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
            </div>
        );
    }

}

class Options extends React.Component {

    render() {
        return (
            <div id='options'>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ol>
                    {this.props.options.map(option => <Option key={option} optionText={option}/>)}
                </ol>
            </div>
        );
    }

}

class Option extends React.Component {

    render() {
        return (
            <li key={this.key}>{this.props.optionText}</li>
        );
    }

}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            this.props.handleAddOption(option);
        }
        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div id='add-option'>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }

}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))