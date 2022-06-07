
        //슬라이드 초기값
        //slideIndex 변수생성
        var slideIndex = 1;

        //슬라이드 시작시 실행되는 showSlides함수 
        //slideIndex 변수 이용예정
        showSlides(slideIndex);

        //페이지 넘기는 이전/다음 버튼 함수
        //값을 불러와서 slideindex 값에 더한 후 showSlides 실행 
        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        //아래쪽 동그라미 버튼 함수(화살표x)
        //n값을 불러와서 slideIndex값에 대입후 showSlides함수 실행
        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        //showslide 함수 실행
        //전달받은 값을 n으로 지정
        function showSlides(n) {
        var i; //변수 생성

        //각 사진/버튼에 들어있는 div 내의 mySlides/dot class 불러오기
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        //n이 1보다 큰 경우 전달받은 n의 값이 슬라이드 전체개수보다 크면 1로 초기화. (slides는 slide개수)
        //n이 1보다 작을 경우 슬라이드인덱스값을 slides.length로 변환
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        //반복문. 사진을 화면에서 숨김처리 
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        //반복문. dot클래스가 가진 active클래스를 ""로 치환
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        //if문으로 slides변수의 slideIndex-1번의 데이터가 보이게 함
        //dot클래스를 가진 span에 active 클래스 추가
        //실행중인 slideIndex에만 스타일 적용을 위해 엑티브 추가 
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        } 
