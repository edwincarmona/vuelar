@extends('layouts.screen')

@section('content')
    <div class="row">
        <div class="col-md-9">
            <h1>Producto @{{ isProduct }}</h1>
            <the-product></the-product>
        </div>
        <div class="col-md-3">
            <div class="star-rating">
                <span class="fas fa-star" data-rating="1"></span>
                <span class="fas fa-star" data-rating="2"></span>
                <span class="fas fa-star" data-rating="3"></span>
                <span class="fas fa-star" data-rating="4"></span>
                <span class="fas fa-star" data-rating="5"></span>
                <input type="hidden" name="whatever1" class="rating-value" value="2.56">
            </div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-md-6">
            @include('products.images')
        </div>
        <div class="col-md-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ut consequuntur quas corporis tempore, id sapiente obcaecati 
            placeat voluptate voluptatum accusantium, a dolor, beatae necessitatibus ratione mollitia quasi nobis. Officia!
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-md-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit delectus cum eligendi corrupti reiciendis. 
            Quas iure rem sed animi possimus totam assumenda odit reiciendis consequuntur deserunt. Dolore aperiam molestias perspiciatis?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis reiciendis alias, amet magnam ea suscipit facere. 
            Molestiae accusantium, quod fugiat, ratione quasi sunt accusamus velit cupiditate optio iure voluptatibus!
        </div>
    </div>
    <hr>
    <div class="row mt-3">
        <div class="col-md-12">
            @include('products.related')
        </div>
    </div>
    <hr>
    <div class="row mt-4">
        <div class="col-md-12">
            @include('products.opinions')
        </div>
    </div>
@endsection

@section('scripts')
    <script>

    </script>
@endsection