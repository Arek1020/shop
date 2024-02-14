PGDMP         $                |            shop    13.4 (Debian 13.4-4.pgdg110+1)    13.4 (Debian 13.4-4.pgdg110+1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384    shop    DATABASE     X   CREATE DATABASE shop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE shop;
                postgres    false            �            1259    16385    cart    TABLE     �   CREATE TABLE public.cart (
    id integer NOT NULL,
    date character varying NOT NULL,
    "user" integer NOT NULL,
    price integer NOT NULL,
    "orderDetails" character varying,
    products character varying,
    payment_date character varying
);
    DROP TABLE public.cart;
       public         heap    postgres    false            �            1259    16391    cart_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cart_id_seq;
       public          postgres    false    200            �           0    0    cart_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;
          public          postgres    false    201            �            1259    16393    product    TABLE     �   CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    price integer NOT NULL,
    image character varying,
    quantity integer
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    16399    product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public          postgres    false    202            �           0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
          public          postgres    false    203            �            1259    16401    session    TABLE     �   CREATE TABLE public.session (
    sess json NOT NULL,
    expire timestamp without time zone NOT NULL,
    sid character varying NOT NULL
);
    DROP TABLE public.session;
       public         heap    postgres    false            �            1259    16407    user    TABLE     	  CREATE TABLE public."user" (
    id integer NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "userName" character varying NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    16413    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    205            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    206            9           2604    16415    cart id    DEFAULT     b   ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);
 6   ALTER TABLE public.cart ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    200            :           2604    16416 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202            ;           2604    16417    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    205            �          0    16385    cart 
   TABLE DATA           _   COPY public.cart (id, date, "user", price, "orderDetails", products, payment_date) FROM stdin;
    public          postgres    false    200   �       �          0    16393    product 
   TABLE DATA           P   COPY public.product (id, name, description, price, image, quantity) FROM stdin;
    public          postgres    false    202   �       �          0    16401    session 
   TABLE DATA           4   COPY public.session (sess, expire, sid) FROM stdin;
    public          postgres    false    204   �"       �          0    16407    user 
   TABLE DATA           Z   COPY public."user" (id, "firstName", "lastName", email, password, "userName") FROM stdin;
    public          postgres    false    205   I$       �           0    0    cart_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.cart_id_seq', 18, true);
          public          postgres    false    201            �           0    0    product_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.product_id_seq', 19, true);
          public          postgres    false    203            �           0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 14, true);
          public          postgres    false    206            ?           2606    16419 &   product PK_bebc9158e480b949565b4dc7a82 
   CONSTRAINT     f   ALTER TABLE ONLY public.product
    ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.product DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82";
       public            postgres    false    202            =           2606    16421 #   cart PK_c524ec48751b9b5bcfbf6e59be7 
   CONSTRAINT     c   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.cart DROP CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7";
       public            postgres    false    200            C           2606    16423 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    205            A           2606    16425    session session_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);
 >   ALTER TABLE ONLY public.session DROP CONSTRAINT session_pkey;
       public            postgres    false    204            �   �   x���;�0�k�Ljpv�$@:/��J-(�G�pw�QԘ��_���H��Q�D!��,��):q��c{hja��(��G��OU�>���@$���(ǳ>�-J��rK�/��D����}��|U�L�D��%�k�X�rHG��H�L�9�)�߀�H[�q����@鋥!�f ���l��Y<�$����(����`O����������r�v+ �ۑ��      �   )  x��U�n�F<s����Y�z��Q��@	1� A.Cr�;|L3C�ш�o������J͐�Z9Jrr9���U��Qt�q"�~Ŏ튛���Rڂ���$n�F��	�$eL���ߒR^/U��T��ߌ����S�:%�H��a�3d��q�eN�c3H�j�J�,�dAxP������B��%���eZ�Etrt�i�`E�Gg���V��-/�-�*�ѽ(�t���{���	t�>hkia��c6 <f�Y�n8�m-5�����:�JWs��x=��*�J�}����H�焿��Iѱ�\۱q@��8�lgҖ�W�מyO� �ύgP~��+���I�ӥ�dF�Ҫ\Ω�K��[�{�����y�2])�h�Zs@�X�Q`��:ӎ��y�PR��ǳ�8�3"�V��������q�F-eA��l@�3eb�c�r2m!	}�6g�7_�,�À��<{;��ƃ�^���k�==�x9��N�Σ�Y|}����;�K8�:����;e\+*5�U�&�ִ�J�*\��l�y���b��C8T��@縠"�\����.�0|*o��2�y�=\�6p~>�O��dU��ts�����r�
�l�θS��S)lޯ��
P֏C_z��3z/Ĝ~eW)�,M�a\�h�����"��sꁿ p��@��"0�v�m������,�n�<� �I�-�_��!
�Q�.��\�2x�62-���t2�\�i#׊DS����AI�?o���Ng�����V�k/�v7Xy�-�D�(����/|�A�f@N$��D��� 7Y��|�$dGT��'�:��:Egt�)j��������`�}�py7-㦪ZX\ d��e�� ��v��i$��]߀p�X?�a[+�!J������j(�}7��������%}pm�8�c������吖��{I�S�"~Tӿ9D=���_A%����"
1�0"ܦ�E�AT�.٤��o��ժ��;�I�E�YMZ������� %w�G'��F��h}�8P�[�S/�v�r0Mb7����"����镩���s1������      �   :  x�Տ�r�@ D���9KJ��K\@q�J�5�a���p�?�[����{�s_���3��U��iXAi�UB2?���?Y3bDs�B���<+��+" �@�xؤ�ln�k�[�ҍ��a��eR�£c[�n���.��)@j�%E}��P��n6�������'iI7�$��[�Gw�抏W�X�DON5v��>ZF��>̗��y�������zk�l5ݤ�oKŎ��������[���	%��t�:y�U�SZ�6�,R\���쿆��4S�ҁ9���1����q_��|P���(��\=�      �   }  x�m�ϒ�@���sx�]���E�jǅ�e���0 ȫ�y�^��JURZ��݇��W_�1�Ʉ����_�&��E+^>8�r	FZ8B���yyv��弙���M;�s�,u]s�U�-������D͹�&�������L"��T�`�_�Wo�mV�N+�jul�$���t�e2H��^h:ùB��0Z�C}F*H�-No',L��`����$�Wץ�iT{���,�ޓP�kc��T���<�m�����JF㬩��+��ZqɌ�k���N׉�D�k��6Ԗ8j/L�ƚѨ��u���!V����m��a��6����5�����W��b�X�Y9q�hΙ��7���L�?��������>�]     