(function () {
  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }

    // show or hide the back-top-top button
    var backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };
  var resultOptions = [
    {
      title: "You should be a Software Dev!",
      desc: "<p>These are tools for making other tools! Software is huge and slick and complicated. Hope youre prepared to keep updating this for months or years. The work is very focused and youll spend a lot of time staring at your computer screen.",
    },
    {
      title: "You should be a Backend Dev!",
      desc: "<p>Backend Development involves setting up databases and figuring out how to best manipulate your data to create websites and applications.</p>",
    },
    {
      title: "You should be a Frontend Dev!",
      desc: "<p>Frontend Developers work with Javascript, HTML, and CSS to make the wireframe created by the backend developers palettable to human eyes and hands. Its similar to UX/UI.</p>",
    },
    {
      title: "You Should Be a UX Designer!",
      desc: "<p>Developers dont like making interfaces. You do. Take their (probably ugly) output and make something that users will not only use, but will WANT to use.</p>",
    },
    {
      title: "You should be a PM!",
      desc: "<p>Theres not a lot of actual coding, so youll need to know more theory than skills. For large projects, though, youre incredibly important because youll be organizing the code monkeys (developers) and ensuring on-time delivery. You focus on the big picture but keep your eye on the deadlines. Youre good at nuturing relationships with clients.</p>",
    },
  ];
  var quizSteps = $("#quizzie .quiz-step"),
    totalScore = 0;
  quizSteps.each(function () {
    var currentStep = $(this),
      ansOpts = currentStep.children(".quiz-answer");
    ansOpts.each(function () {
      var eachOpt = $(this);
      eachOpt[0].addEventListener("click", check, false);
      function check() {
        var $this = $(this),
          value = $this.attr("data-quizIndex"),
          step = parseInt(value);
        switch (step) {
          // indépendant +- 30 factures
          case 1:
            updateStep(currentStep, ".step2");
            break;
          case 2:
            updateStep(currentStep, ".step5");
            break;

          // indépendant + de 30 facture 150 euros par mois
          case 3:
            updateStep(currentStep, ".step3");
            break;
          // indépendant - de 30 factures 100 euros par mois
          case 4:
            updateStep(currentStep, ".step4");
            break;
          // entreprise + de 30 factures 300 euros par mois
          case 7:
            updateStep(currentStep, ".step7");
            break;
          case 8:
            updateStep(currentStep, ".step6");
            break;

          default:
            console.log(`Sorry, we are out of .`);
        }
      }
    });
  });
  jQuery.fn.findNext = function (selector) {
    return this.eq(0).nextAll(selector).eq(0);
  };

  function updateStep(currentStep, step) {
    if (currentStep.hasClass("current")) {
      currentStep.removeClass("current");
      currentStep.findNext(step).addClass("current");
    }
  }

  // carousel review
  $(".testimonial-active").slick({
    dots: true,
    speed: 800,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // section menu active
  function onScroll(event) {
    var sections = document.querySelectorAll(".page-scroll");
    var scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (var i = 0; i < sections.length; i++) {
      var currLink = sections[i];
      var val = currLink.getAttribute("href");
      var refElement = document.querySelector(val);
      var scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  // for menu scroll
  var pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  ("use strict");
})();
