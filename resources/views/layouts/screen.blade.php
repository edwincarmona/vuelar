<!DOCTYPE html>
<html  lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    @include('layouts.nav')
    <div class="mt-3" id="products">
            <div class="row">
                <div class="col-3">
                    @include('layouts.left_nav')
                </div>
                <div class="col-9">
                    @yield('content')
                </div>
            </div>
    </div>
    <script type="module" src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>