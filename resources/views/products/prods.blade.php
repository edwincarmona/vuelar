@extends('layouts.screen')

@section('content')
    <div class="row mt-5">
        <div class="col-md-12">
            <h1>@{{ message }}</h1>
            <router-view></router-view>
        </div>
    </div>
@endsection