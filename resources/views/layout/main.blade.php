<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Boolean.Careers</title>
    <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  </head>
  <body>

    @include('layout.header')

    @yield('content')

    @include('layout.footer')


    <script src="{{ asset('js/app.js') }}" charset="utf-8"></script>
  </body>
</html>
