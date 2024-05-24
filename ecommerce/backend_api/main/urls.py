from django.urls import path
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register('address', views.CustomerAddressViewSet)
router.register('productrating', views.ProductRatingViewSet)


urlpatterns = [
    path('vendors/', views.VendorList.as_view()),
    path('vendor/<int:pk>/', views.VendorDetail.as_view()),

    #products
    path('products/', views.ProductList.as_view()),
    path('products/<str:tag>/', views.TagProductList.as_view()),
    path('product/<int:pk>/', views.ProductDetail.as_view()),
    
    #customers
    path('customers/', views.CustomerList.as_view()),
    path('customer/<int:pk>/', views.CustomerDetail.as_view()),
    
    #orders
    path('orders/', views.OrderList.as_view()),
    path('order/<int:pk>/', views.OrderDetail.as_view()),
    
    #categorys
    path('categories/', views.CategoryList.as_view()),
    path('category/<int:pk>', views.CategoryList.as_view()),

]

urlpatterns += router.urls


    # # # path ('productcategorys/', views.ProductCategoryList.as_view()),

