@extends('layouts.screen')

@section('content')
    <div class="row mt-1">
        <div class="col-md-12">
            <h2>@{{ message }}</h2>
            <products ref="prods"></products>
        </div>
    </div>
@endsection