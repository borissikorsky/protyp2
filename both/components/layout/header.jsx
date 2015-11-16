injectTapEventPlugin();

let {
  FormsyText
} = FMUI;

var {
  AppBar,
  RaisedButton,
  FloatingActionButton
} = MUI;

var {
  ThemeManager,
  LightRawTheme
} = MUI.Styles;


Header = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext(){
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
    }
  },

  getInitialState: function () {
    return {
      canSumbit: false
    };
  },

  errorMessages: {
    wordsError: "Your password is incorrect",
    urlError: "Please provide a valid email"
  },

  styles: {
    paperStyle: {
      width: 300,
      margin: 20,
      padding: 20
    },
    switchStyle: {
      marginBottom:16
    }
  },


  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },

  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },

  submitForm: function (data) {
    // items = Items.find({userId: Meteor.userId()}).fetch();
    result = Meteor.protyp_users.find({email:data.email}).fetch();

    console.log(result);
    open("/home", "_self");
  },

  notifyFormError: function (data) {
    console.error('Form error:', data);
  },

  login: function () {

  },
  render: function () {
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, urlError } = this.errorMessages;


    return (
      <div className="top-appbar">
        <AppBar
          title="Protyp"
          iconElementRight={
            <div>

              <Formsy.Form
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                onValidSubmit={this.submitForm}
                onInvalidSubmit={this.notifyFormError} >

                <FormsyText
                  name='email'
                  required
                  className="header-inputbox"
                  hintText="What is your email?"
                  floatingLabelText="Email Address" />&nbsp;

                <FormsyText
                  name='password'
                  type='password'
                  required
                  className="header-inputbox"
                  primary={true}
                  hintText="What is your password?"
                  floatingLabelText="Password" />

                <FloatingActionButton
                  title="Log In"
                  type="submit"
                  iconClassName="muidocs-icon-action-grade"
                  mini={true} /> &nbsp;

                <FloatingActionButton
                  title="Register"
                  iconClassName="muidocs-icon-action-grade"
                  secondary={true}
                  linkButton={true}
                  href="/register"
                  mini={true} />
              </Formsy.Form>

            </div>
          } />
      </div>
    );
  }
});
