import * as React from "react";
import {Form, FormGroup,Input} from "reactstrap";

interface Props {
    type : any;
    name : string;
    placeholder : string;
    fontAwesome ?: string;
    exceptionMessage : string;
    label : string;
    required ?:  boolean;
    disabled :  boolean;
    onChange?: (e: any) => void;
    value: any;
    maxLength: number;
    invalid: boolean;
    onKeyDown ?: (key : string) => void;
}

class InputComponent extends React.Component<Props> {

    static defaultProps = {
        type : 'text',
        exceptionMessage : '',
        name : 'name',
        placeholder: '',
        required : false,
        disabled : false,
        value: '',
        maxLength: 50,
        invalid : false,
        label :'',
        fontAwesome : '',
        onkeydown : (() => null) as any,
        onChange : (() => null) as any
    };
    
    constructor(props: Readonly<Props>) {
        super(props);
    }


// {fontAwesome &&
// <div className="input-group-prepend">
// <span className={invalid ? "input-group-text errBorderRadius" : "input-group-text"} >
// <span className={fontAwesome}/>
// </span>
// </div>
// }

    render() {
        const {type,name,placeholder,required,disabled,value,maxLength,invalid,label,exceptionMessage} = this.props;

        return <div className="form-group">
            <div className="js-form-message js-focus-state text-right">

                <Form>
                     <FormGroup>
                           { label &&
                           <label
                               className="form-control-label"
                               htmlFor="input-username"
                           >
                               {label}
                           </label> }

                            <Input
                                className={invalid ? 'is-invalid': "form-control-alternative"}
                                required={required} maxLength={maxLength} onChange={(value : any) => this.props.onChange &&  this.props.onChange(value)}
                                type={type} name={name} placeholder={placeholder}  disabled={disabled} value={value}
                                onKeyDown={(e : any)=>this.props.onKeyDown &&  this.props.onKeyDown(e.key)}
                            />
                            {invalid && <span className="font-size-1 text-danger">{exceptionMessage}</span>}
                     </FormGroup>

                </Form>


            </div>
        </div>
    }
}

export {InputComponent};
