PGDMP     3    %    	            {            book_inventory    10.23    10.23 '               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    25211    book_inventory    DATABASE     �   CREATE DATABASE book_inventory WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_El Salvador.1252' LC_CTYPE = 'Spanish_El Salvador.1252';
    DROP DATABASE book_inventory;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    25232    autor    TABLE     �   CREATE TABLE public.autor (
    id_autor integer NOT NULL,
    nombre character varying(25) NOT NULL,
    fecha_nacimiento timestamp without time zone NOT NULL,
    pais character varying(25) NOT NULL
);
    DROP TABLE public.autor;
       public         postgres    false    3            �            1259    25230    autor_id_autor_seq    SEQUENCE     �   CREATE SEQUENCE public.autor_id_autor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.autor_id_autor_seq;
       public       postgres    false    199    3                       0    0    autor_id_autor_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.autor_id_autor_seq OWNED BY public.autor.id_autor;
            public       postgres    false    198            �            1259    25224 	   categoria    TABLE     �   CREATE TABLE public.categoria (
    id_categoria integer NOT NULL,
    nombre character varying(25) NOT NULL,
    archivo character varying(25) NOT NULL
);
    DROP TABLE public.categoria;
       public         postgres    false    3            �            1259    25222    categoria_id_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categoria_id_categoria_seq;
       public       postgres    false    197    3                       0    0    categoria_id_categoria_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.categoria_id_categoria_seq OWNED BY public.categoria.id_categoria;
            public       postgres    false    196            �            1259    25244    libro    TABLE     �   CREATE TABLE public.libro (
    id_libro integer NOT NULL,
    nombre character varying(50) NOT NULL,
    autor integer NOT NULL,
    categoria integer NOT NULL,
    precio numeric(7,2) NOT NULL,
    estado character varying(11) NOT NULL
);
    DROP TABLE public.libro;
       public         postgres    false    3            �            1259    25240    libro_autor_seq    SEQUENCE     �   CREATE SEQUENCE public.libro_autor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.libro_autor_seq;
       public       postgres    false    3    203                       0    0    libro_autor_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.libro_autor_seq OWNED BY public.libro.autor;
            public       postgres    false    201            �            1259    25242    libro_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.libro_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.libro_categoria_seq;
       public       postgres    false    203    3                       0    0    libro_categoria_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.libro_categoria_seq OWNED BY public.libro.categoria;
            public       postgres    false    202            �            1259    25238    libro_id_libro_seq    SEQUENCE     �   CREATE SEQUENCE public.libro_id_libro_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.libro_id_libro_seq;
       public       postgres    false    203    3                       0    0    libro_id_libro_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.libro_id_libro_seq OWNED BY public.libro.id_libro;
            public       postgres    false    200            
           2604    25235    autor id_autor    DEFAULT     p   ALTER TABLE ONLY public.autor ALTER COLUMN id_autor SET DEFAULT nextval('public.autor_id_autor_seq'::regclass);
 =   ALTER TABLE public.autor ALTER COLUMN id_autor DROP DEFAULT;
       public       postgres    false    199    198    199            ~
           2604    25227    categoria id_categoria    DEFAULT     �   ALTER TABLE ONLY public.categoria ALTER COLUMN id_categoria SET DEFAULT nextval('public.categoria_id_categoria_seq'::regclass);
 E   ALTER TABLE public.categoria ALTER COLUMN id_categoria DROP DEFAULT;
       public       postgres    false    197    196    197            �
           2604    25247    libro id_libro    DEFAULT     p   ALTER TABLE ONLY public.libro ALTER COLUMN id_libro SET DEFAULT nextval('public.libro_id_libro_seq'::regclass);
 =   ALTER TABLE public.libro ALTER COLUMN id_libro DROP DEFAULT;
       public       postgres    false    203    200    203            �
           2604    25248    libro autor    DEFAULT     j   ALTER TABLE ONLY public.libro ALTER COLUMN autor SET DEFAULT nextval('public.libro_autor_seq'::regclass);
 :   ALTER TABLE public.libro ALTER COLUMN autor DROP DEFAULT;
       public       postgres    false    201    203    203            �
           2604    25249    libro categoria    DEFAULT     r   ALTER TABLE ONLY public.libro ALTER COLUMN categoria SET DEFAULT nextval('public.libro_categoria_seq'::regclass);
 >   ALTER TABLE public.libro ALTER COLUMN categoria DROP DEFAULT;
       public       postgres    false    202    203    203                      0    25232    autor 
   TABLE DATA               I   COPY public.autor (id_autor, nombre, fecha_nacimiento, pais) FROM stdin;
    public       postgres    false    199   �(                 0    25224 	   categoria 
   TABLE DATA               B   COPY public.categoria (id_categoria, nombre, archivo) FROM stdin;
    public       postgres    false    197   �)                 0    25244    libro 
   TABLE DATA               S   COPY public.libro (id_libro, nombre, autor, categoria, precio, estado) FROM stdin;
    public       postgres    false    203   �*                  0    0    autor_id_autor_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.autor_id_autor_seq', 10, true);
            public       postgres    false    198                       0    0    categoria_id_categoria_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categoria_id_categoria_seq', 10, true);
            public       postgres    false    196                       0    0    libro_autor_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.libro_autor_seq', 1, false);
            public       postgres    false    201                       0    0    libro_categoria_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.libro_categoria_seq', 1, false);
            public       postgres    false    202                       0    0    libro_id_libro_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.libro_id_libro_seq', 1, false);
            public       postgres    false    200            �
           2606    25237    autor autor_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.autor
    ADD CONSTRAINT autor_pkey PRIMARY KEY (id_autor);
 :   ALTER TABLE ONLY public.autor DROP CONSTRAINT autor_pkey;
       public         postgres    false    199            �
           2606    25229    categoria categoria_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public         postgres    false    197            �
           2606    25251    libro libro_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT libro_pkey PRIMARY KEY (id_libro);
 :   ALTER TABLE ONLY public.libro DROP CONSTRAINT libro_pkey;
       public         postgres    false    203            �
           2606    25252    libro libro_autor_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT libro_autor_fkey FOREIGN KEY (autor) REFERENCES public.autor(id_autor);
 @   ALTER TABLE ONLY public.libro DROP CONSTRAINT libro_autor_fkey;
       public       postgres    false    203    199    2694            �
           2606    25257    libro libro_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT libro_categoria_fkey FOREIGN KEY (categoria) REFERENCES public.categoria(id_categoria);
 D   ALTER TABLE ONLY public.libro DROP CONSTRAINT libro_categoria_fkey;
       public       postgres    false    2692    197    203               )  x�u�MNB1���*������A�LΜ\�F�WZm��ݸ G.��y��F�&��;���f����A��@,�����SI�IU
�.>��ܰ��z$V�ି'�,��d���
����]��C�[+�}���y#��ڜx<�{��ã��C�tUDI]�m]��*0v�O�F�Z�����:�%�F��s�S�<3]7�)���v!}�'^�b\��I`Ț4� N�h��{J�Ц.�#�&2�~Gi��0�K�m�'b��2?�aO��b+���J��*Zf���w#���8�         �   x�%�;�0D��Spd矒�"HI�2&Z�x�:)r{�|3O3�J#�1�b�WM�aw��W��rx���C�T�X@�α���p[MQ�vJ���0Qܹ�2Rp>a��Y���7��i�����-Z��1�׽wA�2�5�:"�Y�2*            x������ � �     