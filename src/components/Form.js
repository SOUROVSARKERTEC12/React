import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'javascript',
        text: 'javascript is not available',
        library: 'React',
        isChecked:true,
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState(
                { title: e.target.value },
            );
        } else if (e.target.type === 'textarea') {
            this.setState(
                {
                    text: e.target.value,
                },
            );
        } else if (e.target.type === 'select-one') {
            this.setState(
                {
                    library: e.target.value,
                },
            );
        }
        else if (e.target.type === 'checkbox') {
            this.setState(
                {
                    isChecked: e.target.checked,
                },
            );
        }
    };

    submitHandler=(e)=>{
        const { title, text, library,isChecked } = this.state;
        e.preventDefault();
        console.log(title, text, library,isChecked)
    }

    render() {
        const { title, text, library,isChecked } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' placeholder='Enter Title' value={title} onChange={this.handleChange} />
                    <br />
                    <br />
                    <textarea name='text' value={text} onChange={this.handleChange}></textarea>
                    <br />
                    <br />
                    <select value={library} onChange={this.handleChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isChecked} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}