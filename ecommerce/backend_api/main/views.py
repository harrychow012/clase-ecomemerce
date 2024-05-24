from django.shortcuts import render
from rest_framework import generics, permissions , pagination , viewsets
from . import serializers
from . import models

class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
   #permission_classes = [permissions.IsAuthenticated]
    
class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]
    

class ProductCategory(generics.ListAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.ProductCategorySerializer
    
class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_classes = pagination.PageNumberPagination
    
    def get_queryset(self):
        qs=super().get_queryset()
        if 'category' in self.request.GET:
            category = self.request.GET['category']
            category = models.ProductCategory.objects.get(id=category)
            qs = qs.filter(category=category)
        return qs             
class TagProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_classes = pagination.PageNumberPagination

    def get_queryset(self): 
        qs=super().get_queryset()
        tag = self.kwargs['tag']
        qs = qs.filter(tags__icontains=tag)
        return qs

class ProductDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer
    
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer
    
class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer
    
class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer
    
    #pagination_class = pagination.PageNumberPagination


class OrderDetail(generics.ListAPIView):
    #queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items = models.OrderItems.objects.filter (order=order)
        return order_items
    
# # class ProductCategoryList(generics.ListAPIView):
# #     queryset = models.ProductCategory.objects.all()
# #     serializer_class = serializers.ProductCategorySerializer

class CustomerAddressViewSet(viewsets.ModelViewSet):
    queryset = models.CustomerAddress.objects.all()
    serializer_class = serializers.CustomerAddressSerializer
    
class ProductRatingViewSet(viewsets.ModelViewSet):
    queryset = models.ProductRating.objects.all()
    serializer_class= serializers.ProductRatingSerializer
    
class CategoryList(generics.ListCreateAPIView):
    queryset= models.ProductCategory.objects.all()
    serializer_class= serializers.ProductCategorySerializer