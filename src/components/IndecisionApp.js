import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState({ options });
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

    handlePick = () => {
        const selectedOption = this.state.options[Math.round(Math.random() * this.state.options.length)]
        this.setState({ selectedOption })
    }

    handleClearSelectedOption = () => {
        this.setState({ selectedOption: undefined })
    }

    handleDeleteOptions = () => {
        this.setState({ options: [] });
    }

    handleDeleteOption = (option) => {
        this.setState({ options: this.state.options.filter(element => element != option) });
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        const options = this.state.options.concat(option);
        this.setState({ options });
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
