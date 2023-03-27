let bill = document.getElementById("bill"),
    tip_amount= document.getElementsByClassName("tip_amount"),
    custom= document.getElementById("cust"),
    nb_persons=document.getElementById("prsn"),
    tip_amount_per_person=document.getElementById("tip_amount_per_person"),
    total=document.getElementById("total"),
    reset_btn=document.getElementById("reset_btn");

let tiping=0,
    billing=0,
    people=0;
    ttl_tip_am_per_prsn=0,
    ttl_per_prsn=0;


resetAll();

bill.onkeypress = onlyDicimal;
custom.onkeypress = onlyDicimal;
nb_persons.onkeypress = onlyNumbers;

reset_btn.addEventListener("click",(e) =>{
  resetAll();
});

for (var i = 0; i < tip_amount.length; i++) {
  tip_amount[i].addEventListener("click",(e)=> {
    unchecked();
    e.currentTarget.classList.add("checked");
    e.currentTarget.classList.remove("hov");
    tiping= parseInt(e.currentTarget.innerHTML);
    custom.value="";
    activateBtn();
    calculateAll();
  });
}


bill.addEventListener("input", (e) => {
  onlyCheck(bill, 8);
  billing= onlySetValue(e , billing);
  activateBtn();
  calculateAll();
});

bill.addEventListener("change", (e) => {
  billing= onlySetValue(e , billing);
  calculateAll();
});

bill.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});


bill.addEventListener("paste", (e) => {
  e.preventDefault();
});

nb_persons.addEventListener("input", (e) => {
  onlyCheck(nb_persons, 5);
  if(e.target.value == 0) {
    e.target.parentElement.classList.add("red_label");
    e.target.style.border = "2px solid #ff5252";
  } else {
    e.target.style.border = "none";
    e.target.parentElement.classList.remove("red_label");
  }
  people=onlySetValue(e, people);
  activateBtn();
  calculateAll();
});

nb_persons.addEventListener("change", (e) => {
  if(e.target.value == 0) {
    e.target.parentElement.classList.add("red_label");
    e.target.style.border = "2px solid #ff5252";
  } else {
    e.target.style.border = "none";
    e.target.parentElement.classList.remove("red_label");
  }
  people=onlySetValue(e, people);
  calculateAll();
});

nb_persons.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

nb_persons.addEventListener("paste", (e) => {
  e.preventDefault();
});

custom.addEventListener("input", function(e) {
    onlyCheck(custom,4);
    tiping = onlySetValue(e, tiping);
    unchecked();
    calculateAll();
});

custom.addEventListener("change", (e) => {
  tiping = onlySetValue(e, tiping);
  calculateAll();
});

custom.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

custom.addEventListener("paste", function(e) {
    e.preventDefault();
});


    function onlyCheck(inel, limit) {
      if (inel.value.length > limit) {
          inel.value = inel.value.slice(0, limit);
      }
    }

    function onlySetValue(ev, num) {
      if(ev.target.value !== "")
        num=parseInt(ev.target.value);
      else
        num=0;

      return num;
    }

    function calculateAll() {
      if(people !== 0){
        ttl_tip_am_per_prsn= ((billing * tiping) / 100) / people ;
        ttl_per_prsn= billing / people + ttl_tip_am_per_prsn ;
      }
      tip_amount_per_person.innerHTML = `$${ttl_tip_am_per_prsn.toFixed(2)}`;
      total.innerHTML = `$${ttl_per_prsn.toFixed(2)}`;
    }

    function unchecked() {
      for (var j = 0; j < tip_amount.length; j++) {
        tip_amount[j].classList.remove("checked");
        tip_amount[j].classList.add("hov");
      }
    }

    function onlyDicimal(event) {
        // Get the ASCII value of the key pressed
        var charCode = (event.which) ? event.which : event.keyCode;

            // Validate that the key pressed is a number (0-9) or a decimal point (.)
        if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
          event.preventDefault();
        }
      }

      function onlyNumbers(event) {
    // Get the ASCII value of the key pressed
    var charCode = (event.which) ? event.which : event.keyCode;

    // Validate that the key pressed is a number (0-9)
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  function activateBtn() {
    if(bill.value !== "" || custom.value !== "" || nb_persons.value !== "" || tiping !== 0)
      reset_btn.removeAttribute("disabled");
    else {
      resetAll();
    }
  }

  function disactivateBtn() {
    reset_btn.setAttribute("disabled","");
  }

  function resetAll() {
    bill.value="";
    custom.value="";
    nb_persons.value="";
    total.innerHTML="$0.00";
    tip_amount_per_person.innerHTML="$0.00";
    unchecked();
    disactivateBtn();
  }
