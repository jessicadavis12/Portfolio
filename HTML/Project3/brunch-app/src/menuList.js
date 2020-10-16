import React, {Component, components} from 'react';
class MenuList extends Component {
    static defaultProps = {
        menuitems:[
            {
                title: "", 
                img: "",
                text:""
            },
            {
                title: "", 
                img: "",
                text:""
            }, 
            {
                title: "", 
                img: "",
                text:""
            }
        ],
        driks:[
            {
                title: "", 
                img: "",
                text:""
            },
            {
                title: "", 
                img: "",
                text:""
            },
            {
                title: "", 
                img: "",
                text:""
            },

        ]
    }
    static propTypes = {
        drinks: this.propTypes.arrayOf(PropTypes.object).isRequired,
        menuitems: this.propTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        const menuitems = this.props.menuitems.map((r, index)=>(
            <Menu
        ))
    }

}
