--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    id_user integer NOT NULL,
    token text NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    id_user integer NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, '098c4e9d-e574-4c49-b271-72dfe34dd8d7');
INSERT INTO public.sessions VALUES (2, 3, '0122b712-bcdf-4862-b72d-86936dea7b1c');
INSERT INTO public.sessions VALUES (3, 2, 'adddc0cf-4354-4528-bc0d-6d310f089b6d');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (4, 'https://www.bt.com/content/dam/bt/portal/images/articles/tv/tv-sky-atlantic-now-tv-zerozerozero-instant-expert-dane-dehaan-rebrand-lockup.jpg', 'UTox8QWoSFK4mBvTfu17u', 0, 1);
INSERT INTO public.urls VALUES (5, 'https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2013-04/105_dane_640.jpg?itok=S8ZxqbfS', 'diYt3pGV2U6K4lhIvMwbm', 0, 1);
INSERT INTO public.urls VALUES (6, 'https://media.gq.com/photos/5b489c379eea1c27bfdb9da8/1:1/w_2443,h_2443,c_limit/Bill%20Skarsgard-Cruel%20Summer-GQ-July-2018-01.jpg', 'kAOyCZmjmCBGfDeunTfVe', 0, 1);
INSERT INTO public.urls VALUES (7, 'https://images.mubicdn.net/images/cast_member/67837/cache-211503-1490770733/image-w856.jpg?size=800x', 'Vf1wYZ6eFQr2yWDzEw_jS', 0, 2);
INSERT INTO public.urls VALUES (8, 'https://musicimage.xboxlive.com/catalog/video.contributor.39137000-0200-11db-89ca-0019b92a3933/image?locale=pt-br&target=circle', 'TfCfu-eUxD4OKEuSCoxxK', 0, 2);
INSERT INTO public.urls VALUES (9, 'https://br.web.img2.acsta.net/c_310_420/pictures/19/03/25/20/17/4072446.jpg', '0rRt3GH4f_0bky2nRswEb', 0, 2);
INSERT INTO public.urls VALUES (10, 'https://i.ytimg.com/vi/scIizw2asro/maxresdefault.jpg', 'HE_oylypjUESRCpucfMxt', 0, 3);
INSERT INTO public.urls VALUES (11, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F05%2F17%2FBoy-Kills-World.jpg', 'xXfuihqqsQrp5vapRHU-_', 0, 3);
INSERT INTO public.urls VALUES (12, 'https://flxt.tmsimg.com/assets/528415_v9_bb.jpg', 'h98az68t4ajxmFQy9NsgZ', 0, 1);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Rubs', 'rubs@rubs.com', '$2b$10$Trq7q.Xi4TkGr9azUMLxoexVh1c/wOeZWnD2VwkCY4jxAjUXtHyOO');
INSERT INTO public.users VALUES (2, 'Ana', 'ana@ana.com', '$2b$10$yZLzl/3qoHn8WqH8nSw8X.OAVYjLkAOCpnuXiE9LKJ9WUfHRoEXyi');
INSERT INTO public.users VALUES (3, 'Joao', 'joao@joao.com', '$2b$10$OnI3Mbt25df0o6fqAV4B2uK6roQXd8Q6kpJAhShEne25RzviipTO.');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 12, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: sessions sessions_id_user_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_id_user_key UNIQUE (id_user);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- Name: urls urls_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

