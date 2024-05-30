<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" type="text/css" href="{{ asset('css/register_page_style.css') }}">
</head>
 
<body>
  <div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
      <div class="loginbackground box-background--white padding-top--64">
        <div class="loginbackground-gridContainer">
          <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
            <div class="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
            </div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
            <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
            <div class="box-root box-background--blue800" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
            <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
            <div class="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
            <div class="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
            <div class="box-root box-background--blue animationRightLeft" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
            <div class="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
            <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
          </div>
        </div>
      </div>
      <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
 
        <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1>
            {{__('Зарегистрироваться')}}
          </h1>
        </div>
        <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15"></span>
              <form action="{{ route('auth.store') }}">
                <div class="field padding-bottom--24">
                  <label for="dogovor">
                    {{__('Номер Договора')}}
                  </label>
                  <input type="dogovor" name="dogovor">
                </div>
                <div class="field padding-bottom--24">
                  <label for="name_reg">
                    {{__('Имя')}}
                    </label>
                  <input type="name_reg" name="name_reg">
                </div>
                <div class="field padding-bottom--24">
                  <label for="first_name_reg">
                    {{__('Фамилия')}}
                  </label>
                  <input type="first_name_reg" name="first_name_reg">
                </div>
                <div class="field padding-bottom--24">
                  <label for="comnata">
                    {{__('Номер Комнаты')}}
                  </label>
                  <input type="comnata" name="comnata">
                </div>
                <div class="field padding-bottom--24">
                  <label for="email">
                    {{__('Почта')}}
                  </label>
                  <input type="email" name="email">
                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password">
                      {{__('Пароль')}}
                    </label>
                  </div>
                  <input type="password" name="password">
                </div>
                <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                </div>
                <div class="field padding-bottom--24">
                  <button type="submit">{{__('Зарегистрироваться')}}</button>
                </div>
              </form>
            </div>
          </div>
          <div class="footer-link padding-top--24">
            <span>
              {{__('Уже есть аккаунт?')}}
              <a href="{{ route('auth.login') }}">
              {{__('Войти')}}
              </a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>