import React from "react";
import ReactDOM from "react-dom";
import AddOption from "./components/AddOption";
import Option from "./components/Option"

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState({options});
            }
        } catch (error) {
            // Do nothing, use the default
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handlePick() {
        alert (this.state.options[Math.round(Math.random() * this.state.options.length)])
    }

    handleDeleteOptions() {
        this.setState({options: []});
    }

    handleDeleteOption(option) {
        this.setState({options: this.state.options.filter(element => element != option)});
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        const options = this.state.options.concat(option);
        this.setState({options});
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div id='header'>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision Application'
}

const Action = (props) => {
    return (
        <div id='action'>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div id='options'>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length ===0 && <p>Please add an option to get started...</p>}
            {
                props.options.map(option => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
