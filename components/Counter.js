var Counter = React.createClass({

    getInitialState: function() {
    return {
      counter: 0
    };
  },

    decrement: function() {
    this.setState({
      counter: this.state.counter -1
    });
  },

  getDefaultProps: function() {
    console.log('Ustawienie domyślnych wartości');
  },

  componentWillMount() {
    console.log('Wywołana przed render'); // ale co powoduje..?
  },

  componentDidMount() {
    console.log(' Np. dodanie event listenerow, pobieranie danych');
  },

  componentWillReceiveProps(){
    console.log('Wykonywana gdy komponent otrzyma nowe właściwości(propsy). Aktualizacja stanów, na podstawie nowych właściwości');
  },

  shouldComponentUpdate(){
    console.log('Sprawdzenie czy trzeba "przerysowac" komponent, optymalizacja'); // ?
    return true;
  },
  componentWillUpdate(){
    console.log('Jeśli shouldComponentUpdate zwróci true to zostaje wykonana');
  },
  componentDidUpdate(){
    console.log('manipulacje na drzewie DOM');
  },
  componentWillUnmount(){
    console.log('Np. odpinanie timerów, nasłuchiwanie zdarzeń');
  },

  render: function() {
    return React.createElement('div', {className: 'box'},
      React.createElement('span', {}, 'Licznik: ' + this.state.counter),
      React.createElement('button', {type: 'submit', onClick: this.increment}, 'Dodawanie'),
      React.createElement('button', {type: 'submit', onClick: this.decrement}, 'Odejmowanie'),
    );
  }
});