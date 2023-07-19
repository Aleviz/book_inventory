PGDMP     2    ;                {            book_inventory    10.23    10.23 &               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    16608    book_inventory    DATABASE     �   CREATE DATABASE book_inventory WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_El Salvador.1252' LC_CTYPE = 'Spanish_El Salvador.1252';
    DROP DATABASE book_inventory;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16619    autor    TABLE     �   CREATE TABLE public.autor (
    id_autor bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    fecha_nacimiento timestamp(6) without time zone NOT NULL,
    pais character varying(255) NOT NULL
);
    DROP TABLE public.autor;
       public         postgres    false    3            �            1259    16617    autor_id_autor_seq    SEQUENCE     �   CREATE SEQUENCE public.autor_id_autor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.autor_id_autor_seq;
       public       postgres    false    199    3                       0    0    autor_id_autor_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.autor_id_autor_seq OWNED BY public.autor.id_autor;
            public       postgres    false    198            �            1259    16668 	   autor_seq    SEQUENCE     s   CREATE SEQUENCE public.autor_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
     DROP SEQUENCE public.autor_seq;
       public       postgres    false    3            �            1259    16611 	   categoria    TABLE     �   CREATE TABLE public.categoria (
    id_categoria bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    archivo character varying(255) NOT NULL
);
    DROP TABLE public.categoria;
       public         postgres    false    3            �            1259    16609    categoria_id_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categoria_id_categoria_seq;
       public       postgres    false    3    197                       0    0    categoria_id_categoria_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.categoria_id_categoria_seq OWNED BY public.categoria.id_categoria;
            public       postgres    false    196            �            1259    16685    categoria_seq    SEQUENCE     w   CREATE SEQUENCE public.categoria_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.categoria_seq;
       public       postgres    false    3            �            1259    16627    libro    TABLE        CREATE TABLE public.libro (
    id_libro bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    autor integer NOT NULL,
    categoria integer NOT NULL,
    precio numeric(7,2) NOT NULL,
    estado character varying(255) NOT NULL,
    id_autor bigint,
    id_categoria bigint
);
    DROP TABLE public.libro;
       public         postgres    false    3            �            1259    16625    libro_id_libro_seq    SEQUENCE     �   CREATE SEQUENCE public.libro_id_libro_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.libro_id_libro_seq;
       public       postgres    false    3    201                       0    0    libro_id_libro_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.libro_id_libro_seq OWNED BY public.libro.id_libro;
            public       postgres    false    200            �            1259    16694 	   libro_seq    SEQUENCE     s   CREATE SEQUENCE public.libro_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
     DROP SEQUENCE public.libro_seq;
       public       postgres    false    3            �
           2604    16653    autor id_autor    DEFAULT     p   ALTER TABLE ONLY public.autor ALTER COLUMN id_autor SET DEFAULT nextval('public.autor_id_autor_seq'::regclass);
 =   ALTER TABLE public.autor ALTER COLUMN id_autor DROP DEFAULT;
       public       postgres    false    198    199    199            �
           2604    16670    categoria id_categoria    DEFAULT     �   ALTER TABLE ONLY public.categoria ALTER COLUMN id_categoria SET DEFAULT nextval('public.categoria_id_categoria_seq'::regclass);
 E   ALTER TABLE public.categoria ALTER COLUMN id_categoria DROP DEFAULT;
       public       postgres    false    196    197    197            �
           2604    16687    libro id_libro    DEFAULT     p   ALTER TABLE ONLY public.libro ALTER COLUMN id_libro SET DEFAULT nextval('public.libro_id_libro_seq'::regclass);
 =   ALTER TABLE public.libro ALTER COLUMN id_libro DROP DEFAULT;
       public       postgres    false    201    200    201            
          0    16619    autor 
   TABLE DATA               I   COPY public.autor (id_autor, nombre, fecha_nacimiento, pais) FROM stdin;
    public       postgres    false    199   3(                 0    16611 	   categoria 
   TABLE DATA               B   COPY public.categoria (id_categoria, nombre, archivo) FROM stdin;
    public       postgres    false    197   l)                 0    16627    libro 
   TABLE DATA               k   COPY public.libro (id_libro, nombre, autor, categoria, precio, estado, id_autor, id_categoria) FROM stdin;
    public       postgres    false    201   *                  0    0    autor_id_autor_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.autor_id_autor_seq', 10, true);
            public       postgres    false    198                       0    0 	   autor_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.autor_seq', 1, false);
            public       postgres    false    202                       0    0    categoria_id_categoria_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categoria_id_categoria_seq', 11, true);
            public       postgres    false    196                       0    0    categoria_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.categoria_seq', 1, false);
            public       postgres    false    203                       0    0    libro_id_libro_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.libro_id_libro_seq', 1, false);
            public       postgres    false    200                        0    0 	   libro_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.libro_seq', 1, false);
            public       postgres    false    204            �
           2606    16655    autor autor_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.autor
    ADD CONSTRAINT autor_pkey PRIMARY KEY (id_autor);
 :   ALTER TABLE ONLY public.autor DROP CONSTRAINT autor_pkey;
       public         postgres    false    199            �
           2606    16672    categoria categoria_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public         postgres    false    197            �
           2606    16696     libro fk8ih6w1371cqyfik7kijk3ud7    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT fk8ih6w1371cqyfik7kijk3ud7 FOREIGN KEY (id_autor) REFERENCES public.autor(id_autor);
 J   ALTER TABLE ONLY public.libro DROP CONSTRAINT fk8ih6w1371cqyfik7kijk3ud7;
       public       postgres    false    2697    199    201            �
           2606    16701 !   libro fkj7xsmap3vmoyu7ly8wqe0red9    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT fkj7xsmap3vmoyu7ly8wqe0red9 FOREIGN KEY (id_categoria) REFERENCES public.categoria(id_categoria);
 K   ALTER TABLE ONLY public.libro DROP CONSTRAINT fkj7xsmap3vmoyu7ly8wqe0red9;
       public       postgres    false    201    2695    197            �
           2606    16656    libro libro_autor_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT libro_autor_fkey FOREIGN KEY (autor) REFERENCES public.autor(id_autor);
 @   ALTER TABLE ONLY public.libro DROP CONSTRAINT libro_autor_fkey;
       public       postgres    false    2697    201    199            �
           2606    16673    libro libro_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT libro_categoria_fkey FOREIGN KEY (categoria) REFERENCES public.categoria(id_categoria);
 D   ALTER TABLE ONLY public.libro DROP CONSTRAINT libro_categoria_fkey;
       public       postgres    false    2695    197    201            
   )  x�u�MNB1���*������A�LΜ\�F�WZm��ݸ G.��y��F�&��;���f����A��@,�����SI�IU
�.>��ܰ��z$V�ି'�,��d���
����]��C�[+�}���y#��ڜx<�{��ã��C�tUDI]�m]��*0v�O�F�Z�����:�%�F��s�S�<3]7�)���v!}�'^�b\��I`Ț4� N�h��{J�Ц.�#�&2�~Gi��0�K�m�'b��2?�aO��b+���J��*Zf���w#���8�         �   x�-�;�@Dk�9Z矒�"$)i�e�,�5�M�ܞ�P����S���C�B�BаR�\$�.�&sr�����k�a�X+�W̱��bj��N�%��G��X�M�֭Xa�>�k�kl`?��������8o����Y�o�7��U��;D��M5�            x������ � �     