@section('title') 
Cart
@endsection 
@extends('layouts.main')
@section('style')

@endsection 
@section('rightbar-content')
<!-- Start Contentbar -->    
<div class="contentbar">                
    <!-- Start row -->
    <div class="row">
        <!-- Start col -->
        <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="card m-b-30">
                <div class="card-header">
                    <h5 class="card-title">Cart</h5>
                </div>
                <div class="card-body">
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-xl-8">
                            <div class="cart-container">
                                <div class="cart-head">
                                    <div class="table-responsive">
                                        <table class="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Action</th>                                               
                                                    <th scope="col">Photo</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Qty</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col" class="text-left">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td><a href="#" class="text-danger"><i class="feather icon-trash"></i></a></td>
                                                    <td><img src="assets/images/ecommerce/product_01.svg" class="img-fluid" width="35" alt="product"></td>
                                                    <td>Apple Watch</td>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <input type="number" class="form-control cart-qty" name="cartQty1" id="cartQty1" value="1">
                                                        </div>
                                                    </td>
                                                    <td>$10</td>
                                                    <td class="text-left">$500</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td><a href="#" class="text-danger"><i class="feather icon-trash"></i></a></td>
                                                    <td><img src="assets/images/ecommerce/product_02.svg" class="img-fluid" width="35" alt="product"></td>
                                                    <td>Apple iPhone</td>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <input type="number" class="form-control cart-qty" name="cartQty2" id="cartQty2" value="1">
                                                        </div>
                                                    </td>
                                                    <td>$20</td>
                                                    <td class="text-left">$200</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td><a href="#" class="text-danger"><i class="feather icon-trash"></i></a></td>
                                                    <td><img src="assets/images/ecommerce/product_03.svg" class="img-fluid" width="35" alt="product"></td>
                                                    <td>Apple iPad</td>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <input type="number" class="form-control cart-qty" name="cartQty3" id="cartQty3" value="1">
                                                        </div>
                                                    </td>
                                                    <td>$30</td>
                                                    <td class="text-left">$300</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="cart-body">
                                    <div class="row">
                                        <div class="col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6">
                                            <div class="order-note">
                                                <form>
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <input type="search" class="form-control" placeholder="Coupon Code" aria-label="Search" aria-describedby="button-addonTags">
                                                            <div class="input-group-append">
                                                                <button class="input-group-text" type="submit" id="button-addonTags">Apply</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="specialNotes">Special Note for this order:</label>
                                                        <textarea class="form-control" name="specialNotes" id="specialNotes" rows="3" placeholder="Message here"></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6">
                                            <div class="order-total table-responsive ">
                                                <table class="table table-borderless text-left">
                                                    <tbody>
                                                        <tr>
                                                            <td>Sub Total :</td>
                                                            <td>$1000.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipping :</td>
                                                            <td>$0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tax(18%) :</td>
                                                            <td>$180.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="f-w-7 font-18"><h4>Amount :</h4></td>
                                                            <td class="f-w-7 font-18"><h4>$1180.00</h4></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cart-footer text-left">
                                    <button type="button" class="btn btn-primary-rgba my-1"><i class="feather icon-save mr-2"></i>Update Cart</button>
                                    <a href="page-checkout.html" class="btn btn-success-rgba my-1">Proceed to Checkout<i class="feather icon-arrow-right ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End col -->
    </div>
    <!-- End row -->
</div>
<!-- End Contentbar -->
@endsection 
@section('script')

@endsection 