var app = new Vue ({
    el: '#app',
    data: {
        number: '',
        type: '',
        text: '',
    },
    methods: {
        fetchREST() {
            if (this.number == '') {
                document.getElementById('number-display').style.fontSize = "2em";
                document.getElementById('number-display').innerHTML = "Please enter a number or date.";
            }
            else if (this.type == '') {
                document.getElementById('number-display').style.fontSize = "2em";
                document.getElementById('number-display').innerHTML = "No category is currently selected.";
            }
            else {
                var request = new XMLHttpRequest();
                request.open('GET', 'http://numbersapi.com/' + this.number + '/' + this.type + '?json', true);
                request.onload = function () {
                
                  // Begin accessing JSON data
                  var data = JSON.parse(this.response);
                  this.text = data.text;
                  
                  document.getElementById('number-display').innerHTML = this.text;
                  document.getElementById('number-display').style.fontSize = "2em";
                }
                request.send();
            }
        },
        setTypeTrivia() {
            this.type = 'trivia';
            var element = document.getElementById("trivia-bt");
            element.classList.add("active");
            
            document.getElementById("math-bt").classList.remove("active");
            document.getElementById("date-bt").classList.remove("active");
            document.getElementById("year-bt").classList.remove("active");
        },
        setTypeMath() {
            this.type = 'math';
            var element = document.getElementById("math-bt");
            element.classList.add("active");
            
            document.getElementById("trivia-bt").classList.remove("active");
            document.getElementById("date-bt").classList.remove("active");
            document.getElementById("year-bt").classList.remove("active");
        },
        setTypeDate() {
            this.type = 'date';
            var element = document.getElementById("date-bt");
            element.classList.add("active");
            
            document.getElementById("trivia-bt").classList.remove("active");
            document.getElementById("math-bt").classList.remove("active");
            document.getElementById("year-bt").classList.remove("active");
        },
        setTypeYear() {
            this.type = 'year';
            var element = document.getElementById("year-bt");
            element.classList.add("active");
            
            document.getElementById("trivia-bt").classList.remove("active");
            document.getElementById("math-bt").classList.remove("active");
            document.getElementById("date-bt").classList.remove("active");
        },
    },
});
