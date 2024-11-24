const linkMapping = {
    "index.html": "https://drive.google.com/file/d/14llNch-V0HizbuxvLkoe_Z6cmZgt3-9b/view?usp=drivesdk",
    "fig_my_name_in_Chinese.jpg": "https://drive.google.com/file/d/10KHvRAc-tGKZRXFFwG7_QgWNRLQYsVAA/view?usp=drivesdk",
    "fig_SCILab.jpg": "https://drive.google.com/file/d/17ryQgl0UcSr2eMzQalhsS8Qfz_BSEU-U/view?usp=drivesdk",
    "PapersTopic.html": "https://drive.google.com/file/d/1O7Wq0SAgddUtdkBtWvg1xMeaQcpDS1I7/view?usp=drivesdk",
    "ResearchTeam.html": "https://drive.google.com/file/d/1R3C4hVYMGcQuScQ0TQx55QdCOdPRyFsq/view?usp=drivesdk",
    "fig_me_3.jpg": "https://drive.google.com/file/d/1TF_wUqpLhdg8UhRNLwd16QddlPV8Ez3c/view?usp=drivesdk",
    "README.md": "https://drive.google.com/file/d/1tFY4_c00Dc0KxaydV3vNi4Yui2VGMzQ1/view?usp=drivesdk",
    "teaching_VaR_Weiqian_Li.pdf": "https://drive.google.com/file/d/1h6cqvnfMF2IUjzTsb6bu4HUz7s18Qgju/view?usp=drivesdk",
    "slides_Stochastically_perturbed_geodesic_flows_on_Lie_groups.pdf": "https://drive.google.com/file/d/1WaAdQ7yQiP5uXgtkBzKv6U03jlcltVAO/view?usp=drivesdk",
    "slides_On_stochasticity_in_nearly-elastic_systems.pdf": "https://drive.google.com/file/d/10SGbiprV7oKHMY-r5x3AvWpO4lEje5uR/view?usp=drivesdk",
    "slides_Ito_formula_general_time_scales.pdf": "https://drive.google.com/file/d/1eyKtx_u6XjeQBio9tbdBEviNQ7OXcVxY/view?usp=drivesdk",
    "slides_Fast_convergence_random_perturbations_gradient_flow.pdf": "https://drive.google.com/file/d/1QMPHPsnZ-4ZR4gDhZVKFL9C8I_65umow/view?usp=drivesdk",
    "slides_Dynamics_of_geodesic_flows_with_random_forcing_on_Lie_groups_with_left_invariant_metrics.pdf": "https://drive.google.com/file/d/1YxxR_zENlBCG8u1J8kRiwo_LrUZqW_f8/view?usp=drivesdk",
    "lectures_Vapnik_Nature_StatLearn_5.pdf": "https://drive.google.com/file/d/1fUt4If8LnpVCDtO87OVfEmVci1TsYoCM/view?usp=drivesdk",
    "lectures_Vapnik_Nature_StatLearn_4.pdf": "https://drive.google.com/file/d/1vTGmS5jmW4oz0WAhqCfRdcpu0jMdq2s6/view?usp=drivesdk",
    "lectures_Vapnik_Nature_StatLearn_3.pdf": "https://drive.google.com/file/d/17u-sWolYsbVdE0QlozkQqJTScSk6Lv57/view?usp=drivesdk",
    "lectures_Vapnik_Nature_StatLearn_2.pdf": "https://drive.google.com/file/d/174V9pjiRn-tFTUncRq3WYSp1o79SOTx6/view?usp=drivesdk",
    "lectures_Vapnik_Nature_StatLearn_1.pdf": "https://drive.google.com/file/d/1DmK1XLxIBrvvG86xrkaCEvCHYvyTL4u3/view?usp=drivesdk",
    "lectures_Peking_University_Lectures_2015_summer.pdf": "https://drive.google.com/file/d/1rJP5YMW9WWl3sFYhuZDNUG5rDnPR67jP/view?usp=drivesdk",
    "teaching_CAPM_Yitong_Xu.pdf": "https://drive.google.com/file/d/18RpeDA7VUvkG1voguNkjZgM3N-xV68oU/view?usp=drivesdk",
    "teaching_VaR_Zhouman_Wu.pdf": "https://drive.google.com/file/d/1KiFwLLsgZ0uHa0gp2kaJ6uXt--PMFX5R/view?usp=drivesdk",
    "slides_Small_mass_asymptotic_for_the_motion_with_variable_and_vanishing_friction.pdf": "https://drive.google.com/file/d/1dH5DnGfkwmEOQ8Mh_hZduEXmKY-xArnd/view?usp=drivesdk",
    "teaching_Model_Selection_Wenjing_Yang.pdf": "https://drive.google.com/file/d/18UeoY3dV-JjT1v5w9BIJKGQlw_0XWDOq/view?usp=drivesdk",
    "slides_LDP_Multiscale_SRDE.pdf": "https://drive.google.com/file/d/1PJCeHIbM0fH_rU4zjVkwKyzZ_P2fPsRU/view?usp=drivesdk",
    "slides_On_diffusion_and_wave_front_propagation_in_narrow_random_channels.pdf": "https://drive.google.com/file/d/1T_UDR3WCk-sSp81TXDBin8e3Nlqsg3uT/view?usp=drivesdk",
    "slides_On_second_order_elliptic_equations_with_a_small_parameter.pdf": "https://drive.google.com/file/d/1wjIDfpARv-oyr1r_VAfUrkKqCgdAx-CH/view?usp=drivesdk",
    "slides_Hypoelliptic_multiscale_Langevin_diffusions.pdf": "https://drive.google.com/file/d/15vSoR39unrKNrkTHSj1jDmew3vvQAT0N/view?usp=drivesdk",
    "slides_2-d_incompressible_Euler_equations_with_partial_damping.pdf": "https://drive.google.com/file/d/1D3OITC5FNuEU-2TLjcJyh3jocr78OkzM/view?usp=drivesdk",
    "slides_RL-Manufacturing.pdf": "https://drive.google.com/file/d/1jJxq3Pkl-VUGS65FdXLoZkc-Uf9PMUhd/view?usp=drivesdk",
    "index_old_2016-2022.html": "https://drive.google.com/file/d/1mj37VWxUyvQOYOOU__SfczhMaNqmlvqB/view?usp=drivesdk",
    "Tenure_Chancellor_Hu.pdf": "https://drive.google.com/file/d/1jE18ck2kbH9x05cAUoDejdRGE9O5Hv4U/view?usp=drivesdk",
    "slides_frequency-posterior.pdf": "https://drive.google.com/file/d/1PyQWgY5p-H-j-sg1Wm_Xp_gKd90SIsbS/view?usp=drivesdk",
    "paper_Joint_Control_of_Manufacturing_and_Onsite_Microgrid_System_via_Novel_Neural_Network_Integrated_Reinforcement_Learning_Algorithms.pdf": "https://drive.google.com/file/d/1MYC4hStMAKZrzZc8XcYODbklhyXyamfN/view?usp=drivesdk",
    "paper_On_the_fast_convergence_of_random_perturbations_of_the_gradient_flow.pdf": "https://drive.google.com/file/d/1r6nwQIPGceTHPkp0BIWw0fmYmzpzmLQk/view?usp=drivesdk",
    "lectures_Intro_Stochastic_Processes.pdf": "https://drive.google.com/file/d/1XR_WmiBnSUdZNA_QWAo5aJdlkgg_8X20/view?usp=drivesdk",
    "teaching_2021A_6001_Syllabus.pdf": "https://drive.google.com/file/d/1VEi7ga3GKTi_XMDJfKU_SYIyQ13ewq-X/view?usp=drivesdk",
    "teaching_2021A_6001_Flyer.pdf": "https://drive.google.com/file/d/10B3-hl6eDgH3ltacCX_SsWLSJqWr50ox/view?usp=drivesdk",
    "lectures_DukeKunshan_2020_summer_3.pdf": "https://drive.google.com/file/d/1gljYyUD6nA5ocxgs9y4IfGME4WSiA2GF/view?usp=drivesdk",
    "index.html.bak": "https://drive.google.com/file/d/1SkQLz4o60oUWfhACDMbvWUsyudxCeIZN/view?usp=drivesdk",
    "lectures_DukeKunshan_2020_summer_2.pdf": "https://drive.google.com/file/d/1RSOKEVfhy8C0KeFicV6NUtujGjr9bcWY/view?usp=drivesdk",
    "lectures_DukeKunshan_2020_summer_1.pdf": "https://drive.google.com/file/d/1yyPAV1cMOxtbD-eMym6JSPp9B-YTBis2/view?usp=drivesdk",
    "lectures_DukeKunshan_2020_summer.jpg": "https://drive.google.com/file/d/1hOD582BCgVb90qjkpj8gmimaewddeLCp/view?usp=drivesdk",
    "PapersTopic.html.bak": "https://drive.google.com/file/d/1KmGJvZ-ur8bjcvbLla30EuUgTu1Te7hZ/view?usp=drivesdk",
    "ResearchTeam.html.bak": "https://drive.google.com/file/d/1t2hyzS6RX20edtN_thcIdB_RIM91LQ0D/view?usp=drivesdk",
    "award_2020-2025_SimonsCollaboration.pdf": "https://drive.google.com/file/d/1Jg_mMOBhajXEUESLONk_d1QNcOTCdFEw/view?usp=drivesdk",
    "lectures_Nonlinear_Optimization_in_Machine_Learning.pdf": "https://drive.google.com/file/d/1_-tYsWusgrOPTxqYJXlkqwxjTnmwQcYF/view?usp=drivesdk",
    "Thumbs.db": "https://drive.google.com/file/d/1IZX-L_LMAMDdy1IxBMsu7LhA1beooJr6/view?usp=drivesdk",
    "teaching_2020A_6001_Flyer.pdf": "https://drive.google.com/file/d/1oDB7Es1NmVzLKW_MCv5TUscudujiIv6t/view?usp=drivesdk",
    "teaching_2020A_6001_Syllabus.pdf": "https://drive.google.com/file/d/152bM7V_zhYXefBixosF6cWXbksK6D_jL/view?usp=drivesdk",
    "slides_SGD-Noise.pdf": "https://drive.google.com/file/d/1DOAKECiCnVqLh7HAKPiXNLq7iXQ7Vg0G/view?usp=drivesdk",
    "MediaReport_QuasiPotential-ImplicitSGD-1.pdf": "https://drive.google.com/file/d/1Ax8V4UAv2yjrN2urRTyAytNWZqQTP7lY/view?usp=drivesdk",
    "MediaReport_QuasiPotential-ImplicitSGD-2.pdf": "https://drive.google.com/file/d/1AbvE2abnJdb2zCoe3WPDR-L_Tn4fRkcb/view?usp=drivesdk",
    "slides_wave-tree.pdf": "https://drive.google.com/file/d/1eg5LROwIVq_rl4PyYhGgExgAweeTvtVn/view?usp=drivesdk",
    "index.html~txs0.html": "https://drive.google.com/file/d/1CWX04Pj7dt1KXNEkC59dVhJRDU1V_ExY/view?usp=drivesdk",
    "slides_2dEulerModel.pdf": "https://drive.google.com/file/d/1yDNzMjxX8CyGd5SLQ1KxvN8xYPDdOmcg/view?usp=drivesdk",
    "slides_stochastic_approximation_perturbation.pdf": "https://drive.google.com/file/d/1Z_59bP5sCkLPiuJQPI0vzKq8d4h4JQqt/view?usp=drivesdk",
    "teaching_2019A_6001_Syllabus.pdf": "https://drive.google.com/file/d/1N1qUImVZIuB4OcGsdmxUA7Ys9raE5jpX/view?usp=drivesdk",
    "teaching_2019A_6001_Flyer.pdf": "https://drive.google.com/file/d/1Hk2JreddnHsCXyy3y2DmdlauCXagWUAH/view?usp=drivesdk",
    "fig_me_1.jpg": "https://drive.google.com/file/d/1SKJZPaBBqXUuxmnLYO8RXNEXRqrfCy8u/view?usp=drivesdk",
    "fig_me_2.jpg": "https://drive.google.com/file/d/1XwwdqtEG-a2QzbbqGyqWcX9Vrm9oxvz9/view?usp=drivesdk",
    "award_2018_class-of-42-excellence-teaching-award.jpg": "https://drive.google.com/file/d/1JRu0JX9pnG7bB1iWa1uyoQWNSDlLlrt0/view?usp=drivesdk",
    "award_2018_class-of-42-excellence-teaching-photo.jpg": "https://drive.google.com/file/d/1MaEXF0_fSEvYNxO5lcuQiVbLo6IMdWW9/view?usp=drivesdk",
    "slides_perturbation-degenerate.pdf": "https://drive.google.com/file/d/1pExv5_88Nsvrfy_w_y05FXbDGUwsMfKs/view?usp=drivesdk",
    "teaching_Predator_Prey_Tyler_Blaszak.pdf": "https://drive.google.com/file/d/1k7I3pRI3W1EEPpKOxZRmTWkaT8_CGidg/view?usp=drivesdk",
    "lectures_WrightRecht_Optimization_4.pdf": "https://drive.google.com/file/d/1MoSHY09vxxt6XjFjtNxh3GaNyhGneqk3/view?usp=drivesdk",
    "lectures_WrightRecht_Optimization_3.pdf": "https://drive.google.com/file/d/1aDn5iNVdmLsHp53eKxw_lgcSa2vFJALs/view?usp=drivesdk",
    "award_2018_class-of-42-excellence-teaching.pdf": "https://drive.google.com/file/d/1-bKZU_Met65Ni6XPEg5T4RyUIWjJ3Ii7/view?usp=drivesdk",
    "slides_multiscale_SDE-SPDE.pdf": "https://drive.google.com/file/d/1ruYCWxr-KEelFTUqWZHH9CzOIBfn-ENv/view?usp=drivesdk",
    "lectures_WrightRecht_Optimization_1.pdf": "https://drive.google.com/file/d/1Nh0si6wl5u17QRoyLuiTRyoi6_LQna5t/view?usp=drivesdk",
    "lectures_WrightRecht_Optimization_2.pdf": "https://drive.google.com/file/d/1EKFIxPsKz-v26lXCPvt9y9peFrLUXRHj/view?usp=drivesdk",
    "slides_Perturbation_optimization.pdf": "https://drive.google.com/file/d/1--2s-UsG2UiG9ZMTMnTptAGViFT-H2Qh/view?usp=drivesdk",
    "award_2018_AMS-ICM2018.pdf": "https://drive.google.com/file/d/1qKRqetd5URrmq1l9k2MVGkKjR_bqgRHy/view?usp=drivesdk",
    "award_2015-2017_AMS-Simons.pdf": "https://drive.google.com/file/d/1UL5PhtRrvryHZ8-IHwgVHMQjTqryQqKq/view?usp=drivesdk",
    "award_2017-2018_UMRB.pdf": "https://drive.google.com/file/d/1gTA3udGEO1i2jy9rx1jwtEFeOJ3oW9qj/view?usp=drivesdk",
    "teaching_2015A_comments.pdf": "https://drive.google.com/file/d/1ZHY73rVW5DwkTscDDAZxPXI_3R6C23FB/view?usp=drivesdk",
    "teaching_2013B_evaluation.pdf": "https://drive.google.com/file/d/1PXr2ZkdtG-jcs15dnK2Fo9TeVHnPx4tZ/view?usp=drivesdk",
    "teaching_2013B_comments.pdf": "https://drive.google.com/file/d/1mXti7BAXHNg6wh5GF75j6uoGLWSLi6gh/view?usp=drivesdk",
    "me2.jpg": "https://drive.google.com/file/d/1fm5U29w1U2TbtGoPDlsO1hnV-4z76sZp/view?usp=drivesdk",
    "me.jpg": "https://drive.google.com/file/d/19P_F6is9MVxFMSCAC2ZqXkwQ9i5CrYHB/view?usp=drivesdk",
    "teaching_2016A_comments.pdf": "https://drive.google.com/file/d/1DrGWZHsnNZ6IhC97cr-dTJW4qIAP9QF_/view?usp=drivesdk",
    "teaching_2014B_comments.pdf": "https://drive.google.com/file/d/1OdekZkNzP5lIOFSi4jqXhWNtXMN46Ae3/view?usp=drivesdk",
    "teaching_2015B_5651_evaluation.pdf": "https://drive.google.com/file/d/1bX8W0AEPXFsaLjg-8tp51_bOVBuYa5wb/view?usp=drivesdk",
    "teaching_2015B_5651_comments.pdf": "https://drive.google.com/file/d/1ekcHTP_2HpXDx3VbpOuV3lL4YymrtPdP/view?usp=drivesdk",
    "teaching_2014B_evaluation.pdf": "https://drive.google.com/file/d/1uOb65_tMsOzzrak5yrrslJzn0yfivz0S/view?usp=drivesdk",
    "teaching_2015A_evaluation.pdf": "https://drive.google.com/file/d/1xgVZb6tZyE15mN2b0Rbz9vg0TDeCTQCi/view?usp=drivesdk",
    "teaching_2015B_5652_comments.pdf": "https://drive.google.com/file/d/1SMD-U0qEtdOkFJ5sTcFTe5om8LtWuq9B/view?usp=drivesdk",
    "my_name_in_Chinese.jpg": "https://drive.google.com/file/d/1vEGv330pXxyTKvDGDHmwbiChU98QLdT2/view?usp=drivesdk",
    "teaching_2017A_evaluation.pdf": "https://drive.google.com/file/d/1qtCJfaW_6mMTwumZeoRYVKAemxZ1hhvN/view?usp=drivesdk",
    "teaching_2017A_comments.pdf": "https://drive.google.com/file/d/1h55IBsNa5E5u70FL44NxAY8inZytxjkn/view?usp=drivesdk",
    "teaching_2016B_3304E_evaluation.pdf": "https://drive.google.com/file/d/1qyzGy8YJgk9tHw8sGa780XMKXvzjfbw1/view?usp=drivesdk",
    "teaching_2016B_3304E_comments.pdf": "https://drive.google.com/file/d/1JZEoCoQb51PJQ_HntNCJyofY7EFWslxL/view?usp=drivesdk",
    "teaching_2016B_3304B_evaluation.pdf": "https://drive.google.com/file/d/18hXBt0FofYXxaWLsbY_eQydV1ORcgxlT/view?usp=drivesdk",
    "teaching_2016B_3304B_comments.pdf": "https://drive.google.com/file/d/11-i0O0UgD96LpetAAEKcqmzFzLyr_3Dc/view?usp=drivesdk",
    "teaching_2016A_evaluation.pdf": "https://drive.google.com/file/d/1PL78X0FfndbgmdnvFMIJVF9ThCtBPbpV/view?usp=drivesdk",
    "teaching_2015B_5652_evaluation.pdf": "https://drive.google.com/file/d/1HUWoScwVRiGPgnty3onEI0d3FoC4Bo58/view?usp=drivesdk",
    "lectures_Peking_University_Lectures_2015_summer_poster.pdf": "https://drive.google.com/file/d/1WHq3fldn2RToNPrQoQOjL80hiuOdWDcq/view?usp=drivesdk",
    "lectures_Peking_University_Lectures_2015_summer_abstract.pdf": "https://drive.google.com/file/d/1Op32uf1csesVD_jtwV4qmQ_VrheL_98u/view?usp=drivesdk",
    };

function replaceLinks() {
    document.querySelectorAll('a[href]').forEach(link => {
        const originalHref = link.getAttribute('href');
        if (linkMapping[originalHref]) {
            link.href = linkMapping[originalHref];
        }
    });
}

document.addEventListener('DOMContentLoaded', replaceLinks);