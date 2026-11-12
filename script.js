// ============================================
// Trafik Saveurs - نظام وتطبيق إدارة تجارة الحلويات
// مع دعم كامل لتطبيق أندرويد واستيراد ملفات الإكسل
// ============================================

const T = {
  ar: {
    app_name: 'Trafik Saveurs',
    app_sub: 'نظام تسيير تجارة الحلويات والبسكويت بالجملة',
    install_app_btn: 'تثبيت التطبيق',
    nav: {
      dashboard: '📊 الرئيسية',
      products: '📦 المنتجات',
      sales: '💰 المبيعات',
      excel_import: '📥 استيراد Excel',
      purchases: '🛒 المشتريات',
      customers: '👥 العملاء',
      expenses: '💸 المصاريف',
      reports: '📈 التقارير',
      android_app: '📱 تطبيق أندرويد',
      backup: '💾 النسخ الاحتياطي',
      settings: '⚙️ الإعدادات',
      more: 'المزيد'
    },
    dashboard: {
      title: 'لوحة القيادة',
      todaySales: '💰 مبيعات اليوم',
      todayPaid: '✅ المحصل اليوم',
      totalProducts: '📦 عدد المنتجات',
      lowStock: '⚠️ مخزون منخفض',
      totalDebt: '💳 ديون العملاء',
      totalCustomers: '👥 عدد العملاء',
      monthSales: '📈 مبيعات الشهر',
      monthPurchases: '🛒 مشتريات الشهر',
      monthExpenses: '💸 مصاريف الشهر',
      monthProfit: '📊 ربح الشهر',
      recentSales: 'آخر عمليات البيع',
      lowStockAlert: '⚠️ تنبيه المخزون المنخفض',
      noOperations: 'لا توجد عمليات',
      stockOk: '✅ جميع المنتجات بحالة جيدة',
      th: {
        num: 'رقم',
        date: 'التاريخ',
        customer: 'العميل',
        total: 'الإجمالي',
        paid: 'المدفوع',
        due: 'المتبقي',
        product: 'المنتج',
        stock: 'المخزون',
        min: 'الحد الأدنى'
      }
    },
    products: {
      title: 'إدارة المنتجات والمخزون',
      add: '+ إضافة منتج',
      importExcel: '📥 استيراد إكسل',
      exportExcel: '📤 تصدير إكسل',
      edit: 'تعديل',
      delete: 'حذف',
      confirmDelete: 'هل أنت متأكد من حذف المنتج؟',
      search: '🔍 بحث بالاسم أو الباركود أو الصنف...',
      form: {
        add: 'إضافة منتج جديد',
        edit: 'تعديل منتج',
        name: 'اسم المنتج *',
        category: 'الصنف',
        barcode: 'الباركود',
        unit: 'الوحدة',
        buy: 'سعر الشراء',
        sell: 'سعر البيع',
        stock: 'المخزون',
        min: 'حد التنبيه',
        expiry: 'الصلاحية',
        save: '💾 حفظ',
        cancel: 'إلغاء',
        required: 'اسم المنتج إجباري'
      },
      th: {
        num: 'الرقم',
        name: 'الاسم',
        cat: 'الصنف',
        buy: 'سعر الشراء',
        sell: 'سعر البيع',
        stock: 'المخزون',
        min: 'الحد',
        exp: 'الصلاحية',
        actions: 'إجراءات'
      },
      empty: 'لا توجد منتجات حالياً',
      duplicate: '⚠️ يوجد منتج بنفس الاسم أو الباركود!',
      forceSave: 'هل تريد المتابعة وحفظ المنتج؟',
      noResults: 'لا توجد نتائج مطابقة للبحث',
      deleted: 'تم الحذف بنجاح'
    },
    customers: {
      title: 'إدارة العملاء',
      add: '+ إضافة عميل',
      payDebt: '💳 تسجيل تسديد',
      search: '🔍 بحث بالاسم أو الهاتف...',
      form: {
        add: 'إضافة عميل',
        edit: 'تعديل عميل',
        name: 'الاسم *',
        phone: 'الهاتف',
        address: 'العنوان',
        notes: 'ملاحظات',
        save: '💾 حفظ',
        cancel: 'إلغاء',
        required: 'الاسم إجباري'
      },
      payForm: {
        title: '💳 تسجيل تسديد ديون',
        customer: 'العميل',
        amount: 'المبلغ',
        confirm: 'تأكيد التسديد',
        cancel: 'إلغاء',
        noDebt: 'لا توجد ديون مسجلة على هذا العميل',
        success: 'تم تسجيل التسديد بنجاح',
        invalidAmount: 'مبلغ غير صحيح'
      },
      th: {
        num: 'الرقم',
        name: 'الاسم',
        phone: 'الهاتف',
        address: 'العنوان',
        debt: 'الديون',
        actions: 'إجراءات'
      },
      empty: 'لا يوجد عملاء',
      confirmDelete: 'حذف العميل؟',
      duplicate: '⚠️ يوجد عميل بنفس الاسم!'
    },
    sales: {
      title: 'سجل المبيعات والفواتير',
      add: '+ فاتورة جديدة',
      importExcel: '📥 استيراد فواتير إكسل',
      exportExcel: '📤 تصدير الفواتير إكسل',
      search: '🔍 بحث بالعميل أو رقم الفاتورة...',
      form: {
        title: '💰 فاتورة بيع جديدة',
        customer: 'العميل',
        date: 'التاريخ',
        product: 'المنتج',
        qty: 'الكمية',
        price: 'سعر الوحدة',
        method: 'طريقة الدفع',
        paid: 'المبلغ المدفوع',
        notes: 'ملاحظات',
        addItem: '+ إضافة للفاتورة',
        save: '💾 حفظ وخصم المخزون',
        cancel: 'إلغاء',
        cashCustomer: 'زبون نقدي',
        methods: ['نقداً', 'تحويل', 'آجل', 'مختلط'],
        noItems: 'أضف منتجاً واحداً على الأقل للفاتورة',
        emptyQty: 'تحقق من صحة الكمية والسعر',
        overStock: 'الكمية المطلوبة أكبر من المخزون المتوفر',
        noItemsYet: 'لم تتم إضافة منتجات بعد',
        success: 'تم حفظ الفاتورة رقم'
      },
      th: {
        num: 'رقم',
        date: 'التاريخ',
        customer: 'العميل',
        total: 'الإجمالي',
        paid: 'المدفوع',
        due: 'المتبقي',
        method: 'الدفع',
        actions: 'إجراءات'
      },
      print: '🖨️ طباعة الفاتورة',
      empty: 'لا توجد فواتير مبيعات'
    },
    purchases: {
      title: 'سجل المشتريات',
      add: '+ تسجيل شراء',
      search: '🔍 بحث بالمورد...',
      form: {
        title: '🛒 تسجيل شراء بضاعة',
        supplier: 'المورد',
        date: 'التاريخ',
        product: 'المنتج',
        qty: 'الكمية',
        cost: 'تكلفة الوحدة',
        paid: 'المبلغ المدفوع',
        addItem: '+ إضافة',
        save: '💾 حفظ وتحديث المخزون',
        cancel: 'إلغاء',
        noItems: 'أضف منتجاً'
      },
      th: {
        num: 'الرقم',
        date: 'التاريخ',
        supplier: 'المورد',
        total: 'الإجمالي',
        paid: 'المدفوع',
        due: 'المتبقي'
      },
      empty: 'لا توجد مشتريات'
    },
    expenses: {
      title: 'المصاريف والنفقات',
      add: '+ إضافة مصروف',
      search: '🔍 بحث في المصاريف...',
      form: {
        title: '💸 إضافة مصروف جديد',
        date: 'التاريخ',
        amount: 'المبلغ',
        desc: 'الوصف أو البند *',
        notes: 'ملاحظات',
        save: '💾 حفظ',
        cancel: 'إلغاء',
        required: 'يرجى كتابة الوصف وتحديد المبلغ'
      },
      th: {
        num: 'الرقم',
        date: 'التاريخ',
        desc: 'الوصف',
        amount: 'المبلغ',
        notes: 'ملاحظات',
        actions: 'إجراءات'
      },
      empty: 'لا توجد مصاريف',
      confirmDelete: 'حذف هذا المصروف؟'
    },
    reports: {
      title: '📈 التقارير المالية والإحصائيات',
      from: 'من تاريخ',
      to: 'إلى تاريخ',
      show: '📊 عرض التقرير',
      export: '📥 تصدير تقرير CSV',
      totalSales: '💰 إجمالي المبيعات',
      totalPaid: '✅ المقبوض فعلياً',
      totalPurchases: '🛒 إجمالي المشتريات',
      totalExpenses: '💸 إجمالي المصاريف',
      profit: '📊 صافي الربح',
      operations: '📋 عدد العمليات',
      note: '⚠️ صافي الربح = إجمالي المبيعات - إجمالي المشتريات - المصاريف.',
      invalidDates: 'يرجى تحديد تاريخ البداية والنهاية'
    },
    backup: {
      title: '💾 النسخ الاحتياطي واستعادة البيانات',
      exportTitle: '📤 تصدير نسخة احتياطية شاملة',
      exportDesc: 'ينشئ ملف JSON يحتوي على كامل المنتجات، العملاء، الفواتير، والمصاريف.',
      exportBtn: '📤 تحميل النسخة الاحتياطية',
      importTitle: '📥 استيراد نسخة احتياطية',
      importWarn: '⚠️ تحذير: الاستيراد سيستبدل البيانات الحالية في النظام!',
      importBtn: '📥 استيراد وتطبيق البيانات',
      tip: '💡 يُنصح بأخذ نسخة احتياطية بانتظام وحفظها على هاتفك أو حاسوبك.'
    },
    settings: {
      title: '⚙️ إعدادات المتجر والنظام',
      companyName: 'اسم المتجر / الشركة',
      currency: 'العملة',
      phone: 'رقم الهاتف',
      address: 'العنوان التجاري',
      userName: 'اسم المستخدم (يظهر في الفواتير)',
      save: '💾 حفظ الإعدادات',
      saved: '✅ تم حفظ الإعدادات بنجاح!'
    },
    excel: {
      title: 'مركز استيراد ملفات الإكسل (Excel Hub)',
      sub: 'جلب المنتجات والفواتير مباشرة من ملفات Excel (.xlsx, .xls) و CSV مع نماذج جاهزة للتحميل',
      tabProducts: '📦 استيراد المنتجات',
      tabInvoices: '💰 استيراد الفواتير',
      tabTemplates: '📋 تحميل نماذج الإكسل',
      dropProducts: 'اسحب وأفلت ملف إكسل المنتجات هنا أو اضغط للاختيار',
      dropInvoices: 'اسحب وأفلت ملف إكسل الفواتير هنا أو اضغط للاختيار',
      fileSupport: 'يدعم ملفات: .xlsx, .xls, .csv باللغة العربية والفرنسية والإنجليزية',
      previewTitle: 'معاينة البيانات قبل الاستيراد',
      itemsFound: 'تم العثور على',
      productsFoundCount: 'منتج في الملف',
      invoicesFoundCount: 'فاتورة في الملف',
      btnExecute: '🚀 تنفيذ واستيراد البيانات الآن',
      btnCancel: 'إلغاء',
      updateExistingOption: 'تحديث أسعار ومخزون المنتجات الموجودة مسبقاً',
      deductStockOption: 'خصم كميات الفواتير من المخزون تلقائياً',
      autoCreateCustomers: 'تسجيل العملاء الجدد تلقائياً في قائمة العملاء',
      successProducts: '✅ تم استيراد المنتجات بنجاح!',
      successInvoices: '✅ تم استيراد الفواتير بنجاح!',
      errorParse: '❌ تعذر قراءة الملف. تأكد من صحة تنسيق ملف Excel أو CSV.',
      sampleProductsTitle: 'نموذج ملف إكسل للمنتجات',
      sampleInvoicesTitle: 'نموذج ملف إكسل للفواتير',
      sampleAllTitle: 'نموذج إكسل متكامل (منتجات وفواتير)',
      downloadBtn: '📥 تحميل النموذج (.xlsx)',
      downloadCsvBtn: '📄 تحميل CSV'
    },
    android: {
      title: '📱 تطبيق أندرويد Trafik Saveurs',
      sub: 'دليل تشغيل وتثبيت التطبيق على هواتف وأجهزة أندرويد اللوحية',
      cardPwaTitle: '1. التثبيت الفوري السريع (PWA / WebAPK)',
      cardPwaDesc: 'يعمل التطبيق كـ Progressive Web App معتمد من جوجل أندرويد:',
      pwaSteps: [
        'افتح هذا الموقع في متصفح Google Chrome على هاتف أندرويد.',
        'اضغط على زر "تثبيت التطبيق" في أعلى الشاشة أو من قائمة المتصفح (⋮) واختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية".',
        'سيتم تثبيت أيقونة التطبيق الرسمية على هاتفك وتعمل بملء الشاشة مع دعم العمل بدون إنترنت.'
      ],
      cardApkTitle: '2. تحويل وتصدير حزمة APK للأندرويد',
      cardApkDesc: 'للحصول على ملف APK مستقل يمكن إرساله عبر البلوتوث أو واتساب أو رفعه إلى Google Play:',
      apkSteps: [
        'يمكنك استخدام أداة Google الرسمية Bubblewrap (TWA) لإنشاء APK بضغطة زر.',
        'أو عبر موقع PWABuilder (pwabuilder.com) عبر إدخال رابط الموقع واختيار "Android Package".',
        'ستحصل على ملف .apk جاهز للتثبيت على أي جهاز أندرويد.'
      ],
      cardOfflineTitle: '3. ميزات أندرويد المدمجة',
      offlineFeatures: [
        '⚡ العمل بدون إنترنت (Offline First): جميع البيانات محفوظة في جهازك وتعمل في أي وقت.',
        '🚀 إمكانية استخدام قارئ الباركود عبر كاميرا الهاتف مباشرة.',
        '📊 استيراد وتصدير ملفات الإكسل وحفظها في مجلد التنزيلات على الهاتف.'
      ]
    },
    common: {
      error: 'خطأ',
      chooseFile: 'يرجى اختيار ملف أولاً',
      confirmReplace: 'هل تريد استبدال البيانات الحالية؟'
    }
  },
  fr: {
    app_name: 'Trafik Saveurs',
    app_sub: 'Système de gestion de commerce de confiserie et biscuits en gros',
    install_app_btn: 'Installer l\'application',
    nav: {
      dashboard: '📊 Tableau de bord',
      products: '📦 Produits',
      sales: '💰 Ventes',
      excel_import: '📥 Import Excel',
      purchases: '🛒 Achats',
      customers: '👥 Clients',
      expenses: '💸 Dépenses',
      reports: '📈 Rapports',
      android_app: '📱 App Android',
      backup: '💾 Sauvegarde',
      settings: '⚙️ Paramètres',
      more: 'Plus'
    },
    dashboard: {
      title: 'Tableau de bord',
      todaySales: '💰 Ventes du jour',
      todayPaid: '✅ Encaissé aujourd\'hui',
      totalProducts: '📦 Total produits',
      lowStock: '⚠️ Stock faible',
      totalDebt: '💳 Dettes clients',
      totalCustomers: '👥 Total clients',
      monthSales: '📈 Ventes du mois',
      monthPurchases: '🛒 Achats du mois',
      monthExpenses: '💸 Dépenses du mois',
      monthProfit: '📊 Bénéfice du mois',
      recentSales: 'Dernières ventes',
      lowStockAlert: '⚠️ Alerte stock faible',
      noOperations: 'Aucune opération',
      stockOk: '✅ Tout le stock est normal',
      th: {
        num: 'N°',
        date: 'Date',
        customer: 'Client',
        total: 'Total',
        paid: 'Payé',
        due: 'Reste',
        product: 'Produit',
        stock: 'Stock',
        min: 'Min'
      }
    },
    products: {
      title: 'Gestion des produits et stock',
      add: '+ Ajouter produit',
      importExcel: '📥 Import Excel',
      exportExcel: '📤 Export Excel',
      edit: 'Modifier',
      delete: 'Supprimer',
      confirmDelete: 'Supprimer ce produit ?',
      search: '🔍 Rechercher par nom, code-barres ou catégorie...',
      form: {
        add: 'Ajouter un produit',
        edit: 'Modifier le produit',
        name: 'Nom du produit *',
        category: 'Catégorie',
        barcode: 'Code-barres',
        unit: 'Unité',
        buy: 'Prix d\'achat',
        sell: 'Prix de vente',
        stock: 'Stock actuel',
        min: 'Seuil d\'alerte',
        expiry: 'Date d\'expiration',
        save: '💾 Enregistrer',
        cancel: 'Annuler',
        required: 'Nom du produit obligatoire'
      },
      th: {
        num: 'N°',
        name: 'Nom',
        cat: 'Catégorie',
        buy: 'Prix achat',
        sell: 'Prix vente',
        stock: 'Stock',
        min: 'Seuil',
        exp: 'Expiration',
        actions: 'Actions'
      },
      empty: 'Aucun produit disponible',
      duplicate: '⚠️ Un produit avec le même nom ou code existe déjà !',
      forceSave: 'Continuer et enregistrer ?',
      noResults: 'Aucun résultat trouvé',
      deleted: 'Produit supprimé avec succès'
    },
    customers: {
      title: 'Gestion des clients',
      add: '+ Ajouter client',
      payDebt: '💳 Enregistrer paiement',
      search: '🔍 Rechercher par nom ou tél...',
      form: {
        add: 'Ajouter client',
        edit: 'Modifier client',
        name: 'Nom *',
        phone: 'Téléphone',
        address: 'Adresse',
        notes: 'Notes',
        save: '💾 Enregistrer',
        cancel: 'Annuler',
        required: 'Nom obligatoire'
      },
      payForm: {
        title: '💳 Enregistrement de versement client',
        customer: 'Client',
        amount: 'Montant versé',
        confirm: 'Confirmer',
        cancel: 'Annuler',
        noDebt: 'Aucune dette pour ce client',
        success: 'Paiement enregistré avec succès',
        invalidAmount: 'Montant invalide'
      },
      th: {
        num: 'N°',
        name: 'Nom',
        phone: 'Téléphone',
        address: 'Adresse',
        debt: 'Dettes',
        actions: 'Actions'
      },
      empty: 'Aucun client',
      confirmDelete: 'Supprimer ce client ?',
      duplicate: '⚠️ Un client existe déjà avec ce nom !'
    },
    sales: {
      title: 'Registre des ventes',
      add: '+ Nouvelle facture',
      importExcel: '📥 Import factures Excel',
      exportExcel: '📤 Export factures Excel',
      search: '🔍 Rechercher par client ou N°...',
      form: {
        title: '💰 Nouvelle facture de vente',
        customer: 'Client',
        date: 'Date',
        product: 'Produit',
        qty: 'Quantité',
        price: 'Prix unitaire',
        method: 'Mode de paiement',
        paid: 'Montant payé',
        notes: 'Notes',
        addItem: '+ Ajouter à la facture',
        save: '💾 Enregistrer la facture',
        cancel: 'Annuler',
        cashCustomer: 'Client comptant',
        methods: ['Espèces', 'Virement', 'Crédit', 'Mixte'],
        noItems: 'Ajoutez au moins un produit',
        emptyQty: 'Vérifiez la quantité et le prix',
        overStock: 'Quantité supérieure au stock disponible',
        noItemsYet: 'Aucun produit dans la facture',
        success: 'Facture enregistrée N°'
      },
      th: {
        num: 'N°',
        date: 'Date',
        customer: 'Client',
        total: 'Total',
        paid: 'Payé',
        due: 'Reste',
        method: 'Paiement',
        actions: 'Actions'
      },
      print: '🖨️ Facture',
      empty: 'Aucune facture de vente'
    },
    purchases: {
      title: 'Registre des achats',
      add: '+ Nouvel achat',
      search: '🔍 Rechercher fournisseur...',
      form: {
        title: '🛒 Enregistrer achat',
        supplier: 'Fournisseur',
        date: 'Date',
        product: 'Produit',
        qty: 'Quantité',
        cost: 'Coût unitaire',
        paid: 'Payé',
        addItem: '+ Ajouter',
        save: '💾 Enregistrer',
        cancel: 'Annuler',
        noItems: 'Ajoutez un produit'
      },
      th: {
        num: 'N°',
        date: 'Date',
        supplier: 'Fournisseur',
        total: 'Total',
        paid: 'Payé',
        due: 'Reste'
      },
      empty: 'Aucun achat'
    },
    expenses: {
      title: 'Dépenses et charges',
      add: '+ Ajouter dépense',
      search: '🔍 Rechercher...',
      form: {
        title: '💸 Nouvelle dépense',
        date: 'Date',
        amount: 'Montant',
        desc: 'Description *',
        notes: 'Notes',
        save: '💾 Enregistrer',
        cancel: 'Annuler',
        required: 'Description et montant obligatoires'
      },
      th: {
        num: 'N°',
        date: 'Date',
        desc: 'Description',
        amount: 'Montant',
        notes: 'Notes',
        actions: 'Actions'
      },
      empty: 'Aucune dépense',
      confirmDelete: 'Supprimer cette dépense ?'
    },
    reports: {
      title: '📈 Rapports financiers',
      from: 'Du',
      to: 'Au',
      show: '📊 Afficher',
      export: '📥 Exporter CSV',
      totalSales: '💰 Total ventes',
      totalPaid: '✅ Encaissé',
      totalPurchases: '🛒 Total achats',
      totalExpenses: '💸 Total dépenses',
      profit: '📊 Bénéfice net',
      operations: '📋 Nombre d\'opérations',
      note: '⚠️ Bénéfice = Ventes - Achats - Dépenses.',
      invalidDates: 'Veuillez saisir les dates'
    },
    backup: {
      title: '💾 Sauvegarde & Restauration',
      exportTitle: '📤 Exporter une sauvegarde complète',
      exportDesc: 'Télécharge un fichier JSON contenant tous les produits, clients, factures et dépenses.',
      exportBtn: '📤 Télécharger la sauvegarde',
      importTitle: '📥 Importer une sauvegarde',
      importWarn: '⚠️ Attention : cette opération écrasera toutes les données actuelles !',
      importBtn: '📥 Importer les données',
      tip: '💡 Il est conseillé de faire une sauvegarde régulière de vos données.'
    },
    settings: {
      title: '⚙️ Paramètres du magasin',
      companyName: 'Nom de l\'entreprise',
      currency: 'Devise',
      phone: 'Téléphone',
      address: 'Adresse',
      userName: 'Nom utilisateur (sur factures)',
      save: '💾 Enregistrer',
      saved: '✅ Paramètres enregistrés !'
    },
    excel: {
      title: 'Centre d\'importation Excel (Excel Hub)',
      sub: 'Importez vos produits et factures depuis des fichiers Excel (.xlsx, .xls) et CSV avec modèles prêts au téléchargement',
      tabProducts: '📦 Import Produits',
      tabInvoices: '💰 Import Factures',
      tabTemplates: '📋 Modèles Excel',
      dropProducts: 'Glissez-déposez le fichier Excel des produits ici ou cliquez pour choisir',
      dropInvoices: 'Glissez-déposez le fichier Excel des factures ici ou cliquez pour choisir',
      fileSupport: 'Formats supportés : .xlsx, .xls, .csv en Arabe, Français et Anglais',
      previewTitle: 'Aperçu avant importation',
      itemsFound: 'Trouvé :',
      productsFoundCount: 'produits dans le fichier',
      invoicesFoundCount: 'factures dans le fichier',
      btnExecute: '🚀 Lancer l\'importation',
      btnCancel: 'Annuler',
      updateExistingOption: 'Mettre à jour le stock et les prix des produits existants',
      deductStockOption: 'Déduire automatiquement les quantités vendues du stock',
      autoCreateCustomers: 'Créer automatiquement les nouveaux clients',
      successProducts: '✅ Produits importés avec succès !',
      successInvoices: '✅ Factures importées avec succès !',
      errorParse: '❌ Erreur de lecture du fichier Excel ou CSV.',
      sampleProductsTitle: 'Modèle Excel pour Produits',
      sampleInvoicesTitle: 'Modèle Excel pour Factures',
      sampleAllTitle: 'Modèle Excel Complet (Produits + Factures)',
      downloadBtn: '📥 Télécharger (.xlsx)',
      downloadCsvBtn: '📄 Télécharger CSV'
    },
    android: {
      title: '📱 Application Android Trafik Saveurs',
      sub: 'Guide d\'installation et d\'utilisation sur smartphones et tablettes Android',
      cardPwaTitle: '1. Installation rapide (PWA / WebAPK)',
      cardPwaDesc: 'L\'application fonctionne comme une Progressive Web App certifiée Android :',
      pwaSteps: [
        'Ouvrez ce site avec Google Chrome sur votre téléphone Android.',
        'Appuyez sur le bouton "Installer l\'application" en haut ou dans le menu de Chrome (⋮) puis "Installer l\'application" ou "Ajouter à l\'écran d\'accueil".',
        'L\'icône de Trafik Saveurs apparaîtra sur votre écran d\'accueil et fonctionnera hors-ligne sans connexion internet.'
      ],
      cardApkTitle: '2. Générer un fichier APK dédié',
      cardApkDesc: 'Pour obtenir un fichier .apk indépendant prêt à installer ou distribuer :',
      apkSteps: [
        'Utilisez l\'outil officiel Bubblewrap (TWA) de Google pour empaqueter le site en APK.',
        'Ou via PWABuilder (pwabuilder.com) en collant l\'URL du projet.',
        'Vous obtiendrez un fichier APK signé pour vos téléphones Android.'
      ],
      cardOfflineTitle: '3. Fonctionnalités Android intégrées',
      offlineFeatures: [
        '⚡ Fonctionnement 100% hors-ligne (Offline-first) avec stockage local sur le téléphone.',
        '🚀 Interface tactile adaptée aux smartphones avec barre de navigation inférieure.',
        '📊 Importation et exportation de fichiers Excel directement dans le dossier Téléchargements.'
      ]
    },
    common: {
      error: 'Erreur',
      chooseFile: 'Choisissez un fichier',
      confirmReplace: 'Remplacer les données actuelles ?'
    }
  }
};

// ============================================
// قاعدة البيانات المحلية (localStorage)
// ============================================
const DB = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem('trafik_' + key) || '[]');
    } catch (e) {
      return [];
    }
  },
  set(key, data) {
    localStorage.setItem('trafik_' + key, JSON.stringify(data));
  },
  getObj(key) {
    try {
      return JSON.parse(localStorage.getItem('trafik_' + key) || '{}');
    } catch (e) {
      return {};
    }
  },
  setObj(key, data) {
    localStorage.setItem('trafik_' + key, JSON.stringify(data));
  },
  nextId(key) {
    const data = this.get(key);
    if (!data.length) return 1;
    return Math.max(...data.map(r => parseInt(r.id) || 0)) + 1;
  }
};

// إعدادات افتراضية
if (!localStorage.getItem('trafik_settings')) {
  DB.setObj('settings', {
    'اسم_الشركة': 'Trafik Saveurs',
    'العملة': 'دج',
    'الهاتف': '',
    'العنوان': '',
    'اسم_المستخدم': 'مسؤول المتجر'
  });
}

// بذور بيانات تجريبية أولية إن كانت قاعدة البيانات فارغة تماماً
if (DB.get('products').length === 0) {
  DB.set('products', [
    { id: 1, name: 'بسكويت ماكسي شوكولا 120غ', category: 'بسكويت', barcode: '6131234567890', unit: 'علبة', buy: 45, sell: 60, stock: 150, min: 20, expiry: '2027-06-30' },
    { id: 2, name: 'غوفريت محشو فانيليا 45غ (كرتون 24)', category: 'غوفريت', barcode: '6131234567891', unit: 'كرتون', buy: 720, sell: 950, stock: 80, min: 15, expiry: '2027-08-15' },
    { id: 3, name: 'شوكولاتة حليب برافو 90غ', category: 'شوكولاتة', barcode: '6131234567892', unit: 'علبة', buy: 110, sell: 140, stock: 200, min: 30, expiry: '2027-12-31' },
    { id: 4, name: 'حلوى كراميل طرية ترافيك 1كغ', category: 'حلويات', barcode: '6131234567893', unit: 'كيس', buy: 380, sell: 480, stock: 65, min: 10, expiry: '2027-10-20' },
    { id: 5, name: 'كيك مافن محشو فراولة (علبة 12)', category: 'كيك', barcode: '6131234567894', unit: 'علبة', buy: 260, sell: 340, stock: 45, min: 12, expiry: '2027-04-10' },
    { id: 6, name: 'علكة نكهة النعناع المنعش (صندوق 50)', category: 'حلويات', barcode: '6131234567895', unit: 'علبة', buy: 400, sell: 520, stock: 90, min: 15, expiry: '2028-01-01' }
  ]);
}

if (DB.get('customers').length === 0) {
  DB.set('customers', [
    { id: 1, name: 'سوبرماركت النور', phone: '0550123456', address: 'وسط المدينة', debt: 0, notes: 'عميل جملة دائم' },
    { id: 2, name: 'متجر البركة للحلويات', phone: '0661987654', address: 'حي السلام', debt: 2150, notes: 'دفع نصف آجل' },
    { id: 3, name: 'محل السعادة للمواد الغذائية', phone: '0772345678', address: 'الشارع التجاري', debt: 0, notes: '' }
  ]);
}

if (DB.get('sales').length === 0) {
  DB.set('sales', [
    {
      id: 1001,
      date: new Date().toISOString().substring(0, 10),
      customer: 'سوبرماركت النور',
      total: 4320,
      paid: 4320,
      due: 0,
      method: 'نقداً',
      notes: 'تسليم فوري للمحل',
      items: [
        { productId: 1, name: 'بسكويت ماكسي شوكولا 120غ', qty: 20, price: 60 },
        { productId: 3, name: 'شوكولاتة حليب برافو 90غ', qty: 15, price: 140 },
        { productId: 5, name: 'كيك مافن محشو فراولة (علبة 12)', qty: 3, price: 340 }
      ]
    },
    {
      id: 1002,
      date: new Date().toISOString().substring(0, 10),
      customer: 'متجر البركة للحلويات',
      total: 7150,
      paid: 5000,
      due: 2150,
      method: 'آجل',
      notes: 'دفع جزئي 5000 دج والمتبقي 2150 دج',
      items: [
        { productId: 2, name: 'غوفريت محشو فانيليا 45غ (كرتون 24)', qty: 5, price: 950 },
        { productId: 4, name: 'حلوى كراميل طرية ترافيك 1كغ', qty: 5, price: 480 }
      ]
    }
  ]);
}

// ============================================
// إدارة اللغة
// ============================================
let currentLang = localStorage.getItem('trafik_lang') || 'ar';
let currentSection = 'dashboard';
let deferredInstallPrompt = null;

function t(path) {
  const keys = path.split('.');
  let val = T[currentLang];
  for (const k of keys) {
    if (val && val[k] !== undefined) val = val[k];
    else return path;
  }
  return val;
}

function toggleLang() {
  currentLang = currentLang === 'ar' ? 'fr' : 'ar';
  localStorage.setItem('trafik_lang', currentLang);
  applyLang();
  showSection(currentSection);
}

function applyLang() {
  const isAr = currentLang === 'ar';
  document.body.className = isAr ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.getElementById('langFlag').textContent = isAr ? '🇫🇷' : '🇸🇦';
  document.getElementById('langLabel').textContent = isAr ? 'Français' : 'العربية';
  
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    el.textContent = t(key);
  });
  
  renderNav();
  updateBottomNav(currentSection);
}

function renderNav() {
  const nav = document.getElementById('navBar');
  const sections = ['dashboard', 'products', 'sales', 'excel_import', 'purchases', 'customers', 'expenses', 'reports', 'android_app', 'backup', 'settings'];
  nav.innerHTML = sections.map(s => {
    const isSpecial = s === 'excel_import' || s === 'android_app';
    return `<button class="${s === currentSection ? 'active' : ''} ${isSpecial ? 'nav-special' : ''}" onclick="showSection('${s}')">${t('nav.' + s)}</button>`;
  }).join('');
}

function updateBottomNav(section) {
  document.querySelectorAll('.bnav-item').forEach(btn => {
    const targetSec = btn.dataset.section;
    if (targetSec === section) {
      btn.classList.add('active');
    } else if (targetSec === 'more' && ['purchases','customers','expenses','reports','android_app','backup','settings'].includes(section)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ============================================
// الساعة الحية
// ============================================
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const clockEl = document.getElementById('clockTime');
  if (clockEl) clockEl.textContent = `${h}:${m}:${s}`;
  
  const isAr = currentLang === 'ar';
  const dateEl = document.getElementById('clockDate');
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR', {
      weekday: 'short', day: 'numeric', month: 'short'
    });
  }

  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  setHand('hourHand', (hours * 30) + (minutes * 0.5), 22);
  setHand('minHand', minutes * 6, 30);
  setHand('secHand', seconds * 6, 33);
}

function setHand(id, angle, length) {
  const rad = (angle - 90) * Math.PI / 180;
  const hand = document.getElementById(id);
  if (hand) {
    hand.setAttribute('x2', 50 + length * Math.cos(rad));
    hand.setAttribute('y2', 50 + length * Math.sin(rad));
  }
}

setInterval(updateClock, 1000);
updateClock();

// ============================================
// حالة الشبكة ودعم أوفلاين
// ============================================
function updateNetworkStatus() {
  const dot = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  if (!dot || !text) return;
  if (navigator.onLine) {
    dot.className = 'status-dot online';
    text.textContent = currentLang === 'ar' ? 'متصل' : 'En ligne';
  } else {
    dot.className = 'status-dot offline';
    text.textContent = currentLang === 'ar' ? 'بدون إنترنت' : 'Hors-ligne';
  }
}
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);
updateNetworkStatus();

// ============================================
// دعم تثبيت تطبيق أندرويد (PWA Install)
// ============================================
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  
  const headerBtn = document.getElementById('headerInstallBtn');
  if (headerBtn) headerBtn.style.display = 'inline-flex';
  
  const isDismissed = localStorage.getItem('trafik_dismiss_banner');
  const banner = document.getElementById('androidInstallBanner');
  if (banner && !isDismissed) {
    banner.style.display = 'flex';
  }
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  const banner = document.getElementById('androidInstallBanner');
  if (banner) banner.style.display = 'none';
  const headerBtn = document.getElementById('headerInstallBtn');
  if (headerBtn) headerBtn.style.display = 'none';
  alert(currentLang === 'ar' ? '🎉 تم تثبيت تطبيق Trafik Saveurs بنجاح على جهازك!' : '🎉 Application Trafik Saveurs installée avec succès !');
});

function triggerAndroidInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        dismissInstallBanner();
      }
      deferredInstallPrompt = null;
    });
  } else {
    showSection('android_app');
  }
}

function dismissInstallBanner() {
  const banner = document.getElementById('androidInstallBanner');
  if (banner) banner.style.display = 'none';
  localStorage.setItem('trafik_dismiss_banner', 'true');
}

// ============================================
// الزر العائم للإجراءات السريعة (FAB)
// ============================================
function toggleFabMenu() {
  const menu = document.getElementById('fabMenu');
  const btn = document.getElementById('fabBtn');
  if (!menu || !btn) return;
  const isOpen = menu.classList.contains('show');
  if (isOpen) {
    menu.classList.remove('show');
    btn.classList.remove('open');
  } else {
    menu.classList.add('show');
    btn.classList.add('open');
  }
}

function quickAction(type) {
  toggleFabMenu();
  if (type === 'sale') {
    showSection('sales');
    setTimeout(() => saleForm(), 200);
  } else if (type === 'product') {
    showSection('products');
    setTimeout(() => productForm(), 200);
  } else if (type === 'excel') {
    showSection('excel_import');
  } else if (type === 'android') {
    showSection('android_app');
  }
}

// قائمة المزيد للهواتف
function openMoreMenu() {
  openModal(`
    <h3>⚙️ ${t('nav.more')}</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:10px;">
      <button class="btn btn-outline" style="padding:15px 10px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px;" onclick="closeModal();showSection('purchases')">
        <span style="font-size:24px;">🛒</span>
        <span>${t('nav.purchases')}</span>
      </button>
      <button class="btn btn-outline" style="padding:15px 10px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px;" onclick="closeModal();showSection('customers')">
        <span style="font-size:24px;">👥</span>
        <span>${t('nav.customers')}</span>
      </button>
      <button class="btn btn-outline" style="padding:15px 10px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px;" onclick="closeModal();showSection('expenses')">
        <span style="font-size:24px;">💸</span>
        <span>${t('nav.expenses')}</span>
      </button>
      <button class="btn btn-outline" style="padding:15px 10px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px;" onclick="closeModal();showSection('reports')">
        <span style="font-size:24px;">📈</span>
        <span>${t('nav.reports')}</span>
      </button>
      <button class="btn btn-outline" style="padding:15px 10px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px;" onclick="closeModal();showSection('android_app')">
        <span style="font-size:24px;">📱</span>
        <span>${t('nav.android_app')}</span>
      </button>
      <button class="btn btn-outline" style="padding:15px 10px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px;" onclick="closeModal();showSection('backup')">
        <span style="font-size:24px;">💾</span>
        <span>${t('nav.backup')}</span>
      </button>
      <button class="btn btn-outline" style="grid-column:span 2;padding:15px 10px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px;" onclick="closeModal();showSection('settings')">
        <span style="font-size:24px;">⚙️</span>
        <span>${t('nav.settings')}</span>
      </button>
    </div>
    <div style="margin-top:15px;text-align:center;">
      <button class="btn btn-sm btn-ghost" style="color:var(--text-dark);" onclick="closeModal()">${t('products.form.cancel')}</button>
    </div>
  `);
}

// ============================================
// دوال مساعدة عامة
// ============================================
const content = document.getElementById('content');
const modalBg = document.getElementById('modalBg');
const modalContent = document.getElementById('modalContent');

function openModal(html) {
  modalContent.innerHTML = html;
  modalBg.classList.add('show');
}

function closeModal() {
  modalBg.classList.remove('show');
}

modalBg.onclick = e => {
  if (e.target === modalBg) closeModal();
};

function money(v) {
  const n = parseFloat(v) || 0;
  const settings = DB.getObj('settings');
  return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + (settings['العملة'] || 'دج');
}

function todayStr() {
  return new Date().toISOString().substring(0, 10);
}

// تبديل الأقسام
function showSection(name) {
  currentSection = name;
  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.nav button')).find(b => b.getAttribute('onclick')?.includes(`'${name}'`));
  if (activeBtn) activeBtn.classList.add('active');
  
  updateBottomNav(name);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const funcs = {
    dashboard: loadDashboard,
    products: loadProducts,
    sales: loadSales,
    excel_import: loadExcelImport,
    purchases: loadPurchases,
    customers: loadCustomers,
    expenses: loadExpenses,
    reports: loadReports,
    android_app: loadAndroidApp,
    backup: loadBackup,
    settings: loadSettings
  };
  
  if (funcs[name]) {
    funcs[name]();
  }
}

// ============================================
// لوحة التحكم (Dashboard)
// ============================================
function loadDashboard() {
  const today = todayStr();
  const sales = DB.get('sales');
  const purchases = DB.get('purchases');
  const products = DB.get('products');
  const expenses = DB.get('expenses');
  const customers = DB.get('customers');

  const todaySales = sales.filter(s => s.date === today);
  const todayTotal = todaySales.reduce((a, s) => a + (parseFloat(s.total) || 0), 0);
  const todayPaid = todaySales.reduce((a, s) => a + (parseFloat(s.paid) || 0), 0);
  const totalDebt = sales.reduce((a, s) => a + (parseFloat(s.due) || 0), 0);
  const lowStock = products.filter(p => (parseFloat(p.stock) || 0) <= (parseFloat(p.min) || 0));

  const monthStart = today.substring(0, 7);
  const monthSales = sales.filter(s => (s.date || '').startsWith(monthStart))
    .reduce((a, s) => a + (parseFloat(s.total) || 0), 0);
  const monthPurchases = purchases.filter(p => (p.date || '').startsWith(monthStart))
    .reduce((a, p) => a + (parseFloat(p.total) || 0), 0);
  const monthExpenses = expenses.filter(e => (e.date || '').startsWith(monthStart))
    .reduce((a, e) => a + (parseFloat(e.amount) || 0), 0);

  const th = t('dashboard.th');
  content.innerHTML = `
    <div class="section-title">
      <span>${t('dashboard.title')}</span>
      <div class="section-actions">
        <button class="btn btn-sm" onclick="showSection('excel_import')">📥 ${t('excel.tabTemplates')}</button>
        <button class="btn btn-sm btn-success" onclick="saleForm()">+ ${t('sales.form.title')}</button>
      </div>
    </div>
    
    <div class="cards">
      <div class="card"><div class="title">${t('dashboard.todaySales')}</div><div class="value">${money(todayTotal)}</div></div>
      <div class="card green"><div class="title">${t('dashboard.todayPaid')}</div><div class="value">${money(todayPaid)}</div></div>
      <div class="card blue"><div class="title">${t('dashboard.totalProducts')}</div><div class="value">${products.length}</div></div>
      <div class="card red"><div class="title">${t('dashboard.lowStock')}</div><div class="value">${lowStock.length}</div></div>
      <div class="card red"><div class="title">${t('dashboard.totalDebt')}</div><div class="value">${money(totalDebt)}</div></div>
      <div class="card"><div class="title">${t('dashboard.totalCustomers')}</div><div class="value">${customers.length}</div></div>
      <div class="card green"><div class="title">${t('dashboard.monthSales')}</div><div class="value">${money(monthSales)}</div></div>
      <div class="card"><div class="title">${t('dashboard.monthPurchases')}</div><div class="value">${money(monthPurchases)}</div></div>
      <div class="card"><div class="title">${t('dashboard.monthExpenses')}</div><div class="value">${money(monthExpenses)}</div></div>
      <div class="card green"><div class="title">${t('dashboard.monthProfit')}</div><div class="value">${money(monthSales - monthPurchases - monthExpenses)}</div></div>
    </div>
    
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:20px;">
      <div>
        <div class="section-title" style="font-size:16px;">${t('dashboard.recentSales')}</div>
        <div class="table-responsive">
          <table>
            <thead><tr><th>${th.num}</th><th>${th.date}</th><th>${th.customer}</th><th>${th.total}</th><th>${th.paid}</th><th>${th.due}</th></tr></thead>
            <tbody>${sales.slice(-8).reverse().map(s => `<tr><td>${s.id}</td><td>${s.date}</td><td>${s.customer}</td><td>${money(s.total)}</td><td>${money(s.paid)}</td><td style="color:#B33A32;font-weight:bold;">${money(s.due)}</td></tr>`).join('') || `<tr><td colspan="6" class="no-results">${t('dashboard.noOperations')}</td></tr>`}</tbody>
          </table>
        </div>
      </div>
      <div>
        <div class="section-title" style="font-size:16px;">${t('dashboard.lowStockAlert')}</div>
        <div class="table-responsive">
          <table>
            <thead><tr><th>${th.product}</th><th>${th.stock}</th><th>${th.min}</th></tr></thead>
            <tbody>${lowStock.slice(0, 8).map(p => `<tr><td>${p.name}</td><td style="color:#B33A32;font-weight:bold;">${p.stock} ${p.unit || ''}</td><td>${p.min}</td></tr>`).join('') || `<tr><td colspan="3" class="no-results">${t('dashboard.stockOk')}</td></tr>`}</tbody>
          </table>
        </div>
      </div>
    </div>`;
}

// ============================================
// المنتجات والمخزون
// ============================================
function loadProducts() {
  content.innerHTML = `
    <div class="section-title">
      <span>${t('products.title')}</span>
      <div class="section-actions">
        <button class="btn btn-success" onclick="productForm()">${t('products.add')}</button>
        <button class="btn btn-blue" onclick="showSection('excel_import')">${t('products.importExcel')}</button>
        <button class="btn btn-outline" onclick="exportProductsExcel()">${t('products.exportExcel')}</button>
      </div>
    </div>
    <div class="search-box">
      <input type="text" id="searchProduct" placeholder="${t('products.search')}" oninput="renderProductsList()">
    </div>
    <div id="productsList"></div>`;
  renderProductsList();
}

function renderProductsList() {
  const query = (document.getElementById('searchProduct')?.value || '').toLowerCase();
  const list = DB.get('products').filter(p =>
    !query || p.name.toLowerCase().includes(query) ||
    (p.barcode || '').toLowerCase().includes(query) ||
    (p.category || '').toLowerCase().includes(query)
  );
  const th = t('products.th');
  const noResults = list.length === 0 && query ? `<tr><td colspan="9" class="no-results">${t('products.noResults')}</td></tr>` : '';
  
  document.getElementById('productsList').innerHTML = `
    <div class="table-responsive">
      <table>
        <thead><tr><th>${th.num}</th><th>${th.name}</th><th>${th.cat}</th><th>${th.buy}</th><th>${th.sell}</th><th>${th.stock}</th><th>${th.min}</th><th>${th.exp}</th><th>${th.actions}</th></tr></thead>
        <tbody>${list.map(p => `
          <tr>
            <td>${p.id}</td>
            <td style="font-weight:bold;text-align:${currentLang === 'ar' ? 'right' : 'left'};">${p.name}</td>
            <td><span style="background:#EDE3D2;padding:3px 8px;border-radius:10px;font-size:11px;">${p.category || '-'}</span></td>
            <td>${money(p.buy)}</td>
            <td style="font-weight:bold;">${money(p.sell)}</td>
            <td style="color:${(parseFloat(p.stock) || 0) <= (parseFloat(p.min) || 0) ? '#B33A32' : '#26734D'};font-weight:bold;">${p.stock} <small>${p.unit || ''}</small></td>
            <td>${p.min}</td>
            <td>${p.expiry || '-'}</td>
            <td>
              <button class="btn btn-sm" onclick='productForm(${p.id})'>${t('products.edit')}</button>
              <button class="btn btn-sm btn-danger" onclick="delProduct(${p.id})">${t('products.delete')}</button>
            </td>
          </tr>`).join('') || noResults || `<tr><td colspan="9" class="no-results">${t('products.empty')}</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function productForm(id = null) {
  const f = t('products.form');
  const p = id ? DB.get('products').find(x => x.id == id) : {};
  openModal(`
    <h3>${id ? f.edit : f.add}</h3>
    <div class="form-row">
      <div class="form-group"><label>${f.name}</label><input id="p_name" value="${p.name || ''}" placeholder="مثال: بسكويت ماكسي شوكولا 120غ"></div>
      <div class="form-group"><label>${f.category}</label><input id="p_cat" value="${p.category || ''}" placeholder="بسكويت، شوكولاتة، كيك..."></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.barcode}</label><input id="p_bar" value="${p.barcode || ''}" placeholder="الباركود الدولي أو الداخلي"></div>
      <div class="form-group"><label>${f.unit}</label><input id="p_unit" value="${p.unit || 'علبة'}" placeholder="علبة، كرتون، كيس..."></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.buy}</label><input id="p_buy" type="number" step="0.01" value="${p.buy || 0}"></div>
      <div class="form-group"><label>${f.sell}</label><input id="p_sell" type="number" step="0.01" value="${p.sell || 0}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.stock}</label><input id="p_stock" type="number" step="0.01" value="${p.stock || 0}"></div>
      <div class="form-group"><label>${f.min}</label><input id="p_min" type="number" step="0.01" value="${p.min || 0}"></div>
    </div>
    <div class="form-group"><label>${f.expiry}</label><input id="p_exp" type="date" value="${p.expiry || ''}"></div>
    <div style="display:flex;gap:10px;margin-top:15px;justify-content:flex-end;">
      <button class="btn btn-ghost" style="color:var(--text-dark);" onclick="closeModal()">${f.cancel}</button>
      <button class="btn btn-success" onclick='saveProduct(${id || "null"})'>${f.save}</button>
    </div>`);
}

function saveProduct(id) {
  const f = t('products.form');
  const data = {
    name: document.getElementById('p_name').value.trim(),
    category: document.getElementById('p_cat').value.trim(),
    barcode: document.getElementById('p_bar').value.trim(),
    unit: document.getElementById('p_unit').value.trim() || 'علبة',
    buy: parseFloat(document.getElementById('p_buy').value) || 0,
    sell: parseFloat(document.getElementById('p_sell').value) || 0,
    stock: parseFloat(document.getElementById('p_stock').value) || 0,
    min: parseFloat(document.getElementById('p_min').value) || 0,
    expiry: document.getElementById('p_exp').value
  };
  if (!data.name) { alert(f.required); return; }

  const products = DB.get('products');
  const duplicate = products.find(p =>
    p.id != id &&
    (p.name.toLowerCase() === data.name.toLowerCase() ||
      (data.barcode && p.barcode && p.barcode === data.barcode))
  );
  if (duplicate) {
    if (!confirm(t('products.duplicate') + '\n' + duplicate.name + '\n\n' + t('products.forceSave'))) return;
  }

  if (id) {
    const idx = products.findIndex(p => p.id == id);
    products[idx] = { ...products[idx], ...data };
  } else {
    data.id = DB.nextId('products');
    products.push(data);
  }
  DB.set('products', products);
  closeModal();
  renderProductsList();
}

function delProduct(id) {
  if (confirm(t('products.confirmDelete'))) {
    DB.set('products', DB.get('products').filter(p => p.id != id));
    alert(t('products.deleted'));
    renderProductsList();
  }
}

function exportProductsExcel() {
  const products = DB.get('products');
  if (!products.length) {
    alert(t('products.empty'));
    return;
  }
  const rows = products.map(p => ({
    "اسم_المنتج": p.name,
    "الصنف": p.category || '',
    "الباركود": p.barcode || '',
    "الوحدة": p.unit || '',
    "سعر_الشراء": p.buy || 0,
    "سعر_البيع": p.sell || 0,
    "المخزون": p.stock || 0,
    "حد_التنبيه": p.min || 0,
    "تاريخ_الصلاحية": p.expiry || ''
  }));
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, "المنتجات");
  XLSX.writeFile(wb, `TrafikSaveurs_المنتجات_${todayStr()}.xlsx`);
}

// ============================================
// المبيعات والفواتير
// ============================================
let saleItems = [];

function loadSales() {
  content.innerHTML = `
    <div class="section-title">
      <span>${t('sales.title')}</span>
      <div class="section-actions">
        <button class="btn btn-success" onclick="saleForm()">${t('sales.add')}</button>
        <button class="btn btn-blue" onclick="showSection('excel_import')">${t('sales.importExcel')}</button>
        <button class="btn btn-outline" onclick="exportSalesExcel()">${t('sales.exportExcel')}</button>
      </div>
    </div>
    <div class="search-box">
      <input type="text" id="searchSale" placeholder="${t('sales.search')}" oninput="renderSalesList()">
    </div>
    <div id="salesList"></div>`;
  renderSalesList();
}

function renderSalesList() {
  const query = (document.getElementById('searchSale')?.value || '').toLowerCase();
  const list = DB.get('sales').filter(s =>
    !query || s.customer.toLowerCase().includes(query) ||
    s.id.toString().includes(query)
  ).reverse();
  const th = t('sales.th');
  document.getElementById('salesList').innerHTML = `
    <div class="table-responsive">
      <table>
        <thead><tr><th>${th.num}</th><th>${th.date}</th><th>${th.customer}</th><th>${th.total}</th><th>${th.paid}</th><th>${th.due}</th><th>${th.method}</th><th>${th.actions}</th></tr></thead>
        <tbody>${list.map(s => `
          <tr>
            <td><b>#${s.id}</b></td>
            <td>${s.date}</td>
            <td style="font-weight:bold;">${s.customer}</td>
            <td>${money(s.total)}</td>
            <td style="color:#26734D;font-weight:bold;">${money(s.paid)}</td>
            <td style="color:#B33A32;font-weight:bold;">${money(s.due)}</td>
            <td><span style="background:#EDE3D2;padding:3px 8px;border-radius:10px;font-size:11px;">${s.method}</span></td>
            <td>
              <button class="btn btn-sm btn-gold" onclick="printInvoice(${s.id})">${t('sales.print')}</button>
            </td>
          </tr>`).join('') || `<tr><td colspan="8" class="no-results">${t('sales.empty')}</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function saleForm() {
  saleItems = [];
  const f = t('sales.form');
  const products = DB.get('products');
  const customers = DB.get('customers');

  if (!products.length) {
    alert(currentLang === 'ar' ? 'لا توجد منتجات مسجلة. أضف المنتجات أولاً أو استوردها من ملف إكسل.' : 'Aucun produit. Ajoutez des produits ou importez-les depuis Excel.');
    return;
  }

  openModal(`
    <h3>${f.title}</h3>
    <div class="form-row">
      <div class="form-group"><label>${f.customer}</label><select id="s_cust"><option value="${f.cashCustomer}">${f.cashCustomer}</option>${customers.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}</select></div>
      <div class="form-group"><label>${f.date}</label><input id="s_date" type="date" value="${todayStr()}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.product}</label><select id="s_prod" onchange="setSalePrice()">${products.map(p => `<option value="${p.id}" data-price="${p.sell}" data-stock="${p.stock}" data-name="${p.name}">${p.name} (المتوفر: ${p.stock})</option>`).join('')}</select></div>
      <div class="form-group"><label>${f.qty}</label><input id="s_qty" type="number" step="0.01" value="1" min="1"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.price}</label><input id="s_price" type="number" step="0.01"></div>
      <div class="form-group"><label>${f.method}</label><select id="s_method">${f.methods.map(m => `<option>${m}</option>`).join('')}</select></div>
    </div>
    <button class="btn btn-outline" style="width:100%;margin-bottom:10px;" onclick="addSaleItem()">${f.addItem}</button>
    <div class="items-list" id="saleItemsList"></div>
    <div class="form-row" style="margin-top:10px;">
      <div class="form-group"><label>${f.paid}</label><input id="s_paid" type="number" step="0.01" value="0"></div>
      <div class="form-group"><label>${f.notes}</label><input id="s_notes" placeholder="ملاحظات اختيارية"></div>
    </div>
    <div class="total-bar">
      <span>${t('dashboard.th.total')}:</span>
      <span id="saleTotal" style="color:var(--primary);font-size:18px;">0.00</span>
    </div>
    <div style="display:flex;gap:10px;margin-top:15px;justify-content:flex-end;">
      <button class="btn btn-ghost" style="color:var(--text-dark);" onclick="closeModal()">${f.cancel}</button>
      <button class="btn btn-success" onclick="saveSale()">${f.save}</button>
    </div>`);
  setSalePrice();
}

function setSalePrice() {
  const sel = document.getElementById('s_prod');
  if (sel && sel.selectedIndex >= 0) {
    document.getElementById('s_price').value = sel.options[sel.selectedIndex].dataset.price;
  }
}

function addSaleItem() {
  const f = t('sales.form');
  const sel = document.getElementById('s_prod');
  const id = sel.value;
  const name = sel.options[sel.selectedIndex].dataset.name;
  const qty = parseFloat(document.getElementById('s_qty').value);
  const price = parseFloat(document.getElementById('s_price').value);
  const stock = parseFloat(sel.options[sel.selectedIndex].dataset.stock);

  if (!qty || qty <= 0 || !price) {
    alert(f.emptyQty);
    return;
  }
  const existing = saleItems.find(i => i.productId == id);
  const totalQty = (existing ? existing.qty : 0) + qty;
  if (totalQty > stock) {
    alert(`${f.overStock} (${stock})`);
    return;
  }
  if (existing) existing.qty = totalQty;
  else saleItems.push({ productId: id, name, qty, price });
  renderSaleItems();
}

function renderSaleItems() {
  const f = t('sales.form');
  let total = 0;
  const html = saleItems.map((it, i) => {
    const sub = it.qty * it.price;
    total += sub;
    return `
      <div class="item-row">
        <span><b>${it.name}</b> × ${it.qty} = <b>${money(sub)}</b></span>
        <button class="btn btn-sm btn-danger" onclick="removeSaleItem(${i})">×</button>
      </div>`;
  }).join('');
  document.getElementById('saleItemsList').innerHTML = html || `<div style="padding:10px;color:#776A62;text-align:center;">${f.noItemsYet}</div>`;
  document.getElementById('saleTotal').innerText = money(total);
  document.getElementById('s_paid').value = total.toFixed(2);
}

function removeSaleItem(i) {
  saleItems.splice(i, 1);
  renderSaleItems();
}

function saveSale() {
  const f = t('sales.form');
  if (!saleItems.length) {
    alert(f.noItems);
    return;
  }
  const total = saleItems.reduce((a, it) => a + it.qty * it.price, 0);
  const paid = parseFloat(document.getElementById('s_paid').value) || 0;
  const sale = {
    id: DB.nextId('sales'),
    date: document.getElementById('s_date').value,
    customer: document.getElementById('s_cust').value,
    total,
    paid,
    due: total - paid,
    method: document.getElementById('s_method').value,
    notes: document.getElementById('s_notes').value,
    items: [...saleItems]
  };

  // خصم المخزون
  const products = DB.get('products');
  saleItems.forEach(it => {
    const p = products.find(x => x.id == it.productId);
    if (p) p.stock = (parseFloat(p.stock) || 0) - it.qty;
  });
  DB.set('products', products);

  // تحديث ديون العميل إن لم يكن الدفع كاملاً
  if (sale.due > 0 && sale.customer !== f.cashCustomer) {
    const customers = DB.get('customers');
    const cust = customers.find(c => c.name === sale.customer);
    if (cust) {
      cust.debt = (parseFloat(cust.debt) || 0) + sale.due;
      DB.set('customers', customers);
    }
  }

  const sales = DB.get('sales');
  sales.push(sale);
  DB.set('sales', sales);

  closeModal();
  alert(`${f.success} ${sale.id}`);
  renderSalesList();
}

function printInvoice(id) {
  const sale = DB.get('sales').find(s => s.id == id);
  if (!sale) return;

  const settings = DB.getObj('settings');
  const shopName = settings['اسم_الشركة'] || 'Trafik Saveurs';
  const shopPhone = settings['الهاتف'] || '';
  const shopAddress = settings['العنوان'] || '';

  const now = new Date();
  const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  const hijriDate = gregorianToHijri(now);

  const rows = (sale.items || []).map(it => `
    <tr>
      <td style="text-align:right;">${it.name}</td>
      <td>${it.qty}</td>
      <td>${money(it.price)}</td>
      <td style="font-weight:bold;">${money(it.qty * it.price)}</td>
    </tr>`).join('');

  const html = `<!doctype html>
  <html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8">
    <title>فاتورة #${sale.id} - ${shopName}</title>
    <style>
      * { margin:0; padding:0; box-sizing:border-box; font-family:'Segoe UI', Tahoma, sans-serif; }
      body { margin: 25px; color: #2D160E; background: #fff; }
      .head { text-align:center; border-bottom: 3px solid #E9A900; padding-bottom: 14px; margin-bottom: 16px; }
      h1 { color: #E0A000; font-size: 26px; margin-bottom: 4px; }
      .sub { font-size: 13px; color: #776A62; }
      .meta-box { display: flex; justify-content: space-between; background: #F9F6F0; padding: 10px 15px; border-radius: 8px; margin-bottom: 15px; font-size: 13px; }
      table { width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 13px; }
      th, td { border: 1px solid #D7C8B6; padding: 8px 12px; text-align: center; }
      th { background: #F5E8CF; font-weight: bold; }
      .sum-box { width: 320px; margin-right: auto; margin-bottom: 15px; background: #F9F6F0; border-radius: 8px; overflow: hidden; }
      .sum-box table td { text-align: right; }
      .btn-print { background: #E9A900; color: #2D160E; border: none; padding: 10px 20px; font-weight: bold; border-radius: 6px; cursor: pointer; }
      @media print { .no-print { display: none; } body { margin: 0; } }
    </style>
  </head>
  <body>
    <div class="head">
      <h1>${shopName}</h1>
      <div class="sub">تجارة وتوزيع الحلويات والبسكويت بالجملة</div>
      ${shopPhone ? `<div>📞 ${shopPhone}</div>` : ''}
      ${shopAddress ? `<div>📍 ${shopAddress}</div>` : ''}
      <h2 style="margin-top:10px;">فاتورة بيع رقم: #${sale.id}</h2>
    </div>
    <div class="meta-box">
      <div><b>👤 الزبون:</b> ${sale.customer}</div>
      <div><b>📅 التاريخ:</b> ${sale.date} (${hijriDate})</div>
      <div><b>🕐 الوقت:</b> ${timeStr}</div>
    </div>
    <table>
      <thead><tr><th>المنتج</th><th>الكمية</th><th>سعر الوحدة</th><th>المجموع</th></tr></thead>
      <tbody>${rows || '<tr><td colspan="4">لا توجد تفاصيل</td></tr>'}</tbody>
    </table>
    <div class="sum-box">
      <table>
        <tr><th>المبلغ الإجمالي</th><td><b>${money(sale.total)}</b></td></tr>
        <tr><th>المبلغ المدفوع</th><td><b style="color:#26734D;">${money(sale.paid)}</b></td></tr>
        <tr><th>المبلغ المتبقي</th><td><b style="color:#B33A32;">${money(sale.due)}</b></td></tr>
        <tr><th>طريقة الدفع</th><td>${sale.method}</td></tr>
      </table>
    </div>
    ${sale.notes ? `<div style="margin-bottom:15px;font-size:12px;"><b>ملاحظات:</b> ${sale.notes}</div>` : ''}
    <div style="text-align:center;margin-top:20px;" class="no-print">
      <button class="btn-print" onclick="window.print()">🖨️ طباعة الفاتورة الآن</button>
    </div>
  </body>
  </html>`;

  const printWin = window.open('', '_blank');
  if (printWin) {
    printWin.document.write(html);
    printWin.document.close();
  }
}

function exportSalesExcel() {
  const sales = DB.get('sales');
  if (!sales.length) {
    alert(t('sales.empty'));
    return;
  }
  const rows = [];
  sales.forEach(s => {
    (s.items || []).forEach(it => {
      rows.push({
        "رقم_الفاتورة": s.id,
        "التاريخ": s.date,
        "اسم_العميل": s.customer,
        "اسم_المنتج": it.name,
        "الكمية": it.qty,
        "سعر_الوحدة": it.price,
        "المبلغ_الإجمالي": s.total,
        "المبلغ_المدفوع": s.paid,
        "طريقة_الدفع": s.method,
        "ملاحظات": s.notes || ''
      });
    });
  });
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, "الفواتير");
  XLSX.writeFile(wb, `TrafikSaveurs_الفواتير_${todayStr()}.xlsx`);
}

// ============================================
// مركز استيراد ملفات الإكسل (Excel Import Hub)
// ============================================
let excelCurrentTab = 'products';
let parsedExcelProducts = [];
let parsedExcelInvoices = [];

function loadExcelImport() {
  const ex = t('excel');
  content.innerHTML = `
    <div class="section-title">
      <div>
        <span>${ex.title}</span>
        <div style="font-size:12px;color:var(--text-muted);font-weight:normal;margin-top:4px;">${ex.sub}</div>
      </div>
      <div class="section-actions">
        <button class="btn btn-sm btn-gold" onclick="switchExcelTab('templates')">📥 نماذج Excel الجاهزة</button>
      </div>
    </div>

    <!-- تبويبات الاستيراد -->
    <div class="excel-tabs">
      <button class="excel-tab-btn ${excelCurrentTab === 'products' ? 'active' : ''}" onclick="switchExcelTab('products')">
        ${ex.tabProducts}
      </button>
      <button class="excel-tab-btn ${excelCurrentTab === 'invoices' ? 'active' : ''}" onclick="switchExcelTab('invoices')">
        ${ex.tabInvoices}
      </button>
      <button class="excel-tab-btn ${excelCurrentTab === 'templates' ? 'active' : ''}" onclick="switchExcelTab('templates')">
        ${ex.tabTemplates}
      </button>
    </div>

    <!-- محتوى التبويب النشط -->
    <div id="excelTabContent"></div>`;

  renderExcelTabContent();
}

function switchExcelTab(tab) {
  excelCurrentTab = tab;
  document.querySelectorAll('.excel-tab-btn').forEach(b => b.classList.remove('active'));
  renderExcelTabContent();
}

function renderExcelTabContent() {
  const container = document.getElementById('excelTabContent');
  if (!container) return;
  const ex = t('excel');

  if (excelCurrentTab === 'products') {
    container.innerHTML = `
      <div class="drop-zone" id="dropProductsZone" onclick="document.getElementById('excelProductsFile').click()">
        <span class="drop-icon">📦</span>
        <div class="drop-title">${ex.dropProducts}</div>
        <div class="drop-sub">${ex.fileSupport}</div>
        <input type="file" id="excelProductsFile" accept=".xlsx, .xls, .csv" style="display:none;" onchange="handleProductsFileUpload(event)">
        <button class="btn btn-gold" onclick="event.stopPropagation();document.getElementById('excelProductsFile').click()">📂 اختيار ملف من الجهاز</button>
      </div>

      <div class="import-options-box">
        <label>
          <input type="checkbox" id="chkUpdateExistingProducts" checked>
          <span>${ex.updateExistingOption}</span>
        </label>
      </div>

      <div id="productsPreviewArea"></div>`;
    setupDragDrop('dropProductsZone', handleProductsFile);
  } else if (excelCurrentTab === 'invoices') {
    container.innerHTML = `
      <div class="drop-zone" id="dropInvoicesZone" onclick="document.getElementById('excelInvoicesFile').click()">
        <span class="drop-icon">💰</span>
        <div class="drop-title">${ex.dropInvoices}</div>
        <div class="drop-sub">${ex.fileSupport}</div>
        <input type="file" id="excelInvoicesFile" accept=".xlsx, .xls, .csv" style="display:none;" onchange="handleInvoicesFileUpload(event)">
        <button class="btn btn-gold" onclick="event.stopPropagation();document.getElementById('excelInvoicesFile').click()">📂 اختيار ملف فواتير</button>
      </div>

      <div class="import-options-box">
        <label>
          <input type="checkbox" id="chkDeductStock" checked>
          <span>${ex.deductStockOption}</span>
        </label>
        <label>
          <input type="checkbox" id="chkAutoCreateCustomers" checked>
          <span>${ex.autoCreateCustomers}</span>
        </label>
      </div>

      <div id="invoicesPreviewArea"></div>`;
    setupDragDrop('dropInvoicesZone', handleInvoicesFile);
  } else if (excelCurrentTab === 'templates') {
    renderTemplatesTab(container);
  }
}

function setupDragDrop(zoneId, handler) {
  const zone = document.getElementById(zoneId);
  if (!zone) return;

  ['dragenter', 'dragover'].forEach(name => {
    zone.addEventListener(name, e => {
      e.preventDefault();
      e.stopPropagation();
      zone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(name => {
    zone.addEventListener(name, e => {
      e.preventDefault();
      e.stopPropagation();
      zone.classList.remove('dragover');
    });
  });

  zone.addEventListener('drop', e => {
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handler(files[0]);
    }
  });
}

// معالجة ملف المنتجات
function handleProductsFileUpload(e) {
  if (e.target.files && e.target.files[0]) {
    handleProductsFile(e.target.files[0]);
  }
}

function handleProductsFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const rawJson = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

      if (!rawJson || rawJson.length === 0) {
        alert(t('excel.errorParse'));
        return;
      }

      parsedExcelProducts = normalizeProductsData(rawJson);
      renderProductsPreview(parsedExcelProducts);
    } catch (err) {
      alert(t('excel.errorParse') + '\n' + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

// توحيد مسميات الأعمدة لملف المنتجات
function normalizeProductsData(rows) {
  const existingProducts = DB.get('products');

  return rows.map((r, idx) => {
    const keys = Object.keys(r);

    const findVal = (patterns) => {
      for (const k of keys) {
        const cleanK = k.toString().trim().toLowerCase().replace(/[\s_\-]/g, '');
        for (const p of patterns) {
          if (cleanK.includes(p)) return r[k];
        }
      }
      return '';
    };

    const name = findVal(['اسممنتج', 'منتج', 'اسم', 'produit', 'designation', 'nom', 'name', 'product', 'item']);
    const category = findVal(['صنف', 'فئة', 'نوع', 'categorie', 'category', 'type', 'cat']) || 'عام';
    const barcode = String(findVal(['باركود', 'كود', 'codebarre', 'barcode', 'code', 'ref', 'sku']) || '').trim();
    const unit = findVal(['وحدة', 'unite', 'unit']) || 'علبة';
    const buy = parseFloat(findVal(['سعرشراء', 'شراء', 'تكلفة', 'prixachat', 'cout', 'buyprice', 'cost', 'achat']) || 0);
    const sell = parseFloat(findVal(['سعربيع', 'بيع', 'جملة', 'prixvente', 'sellprice', 'price', 'vente']) || 0);
    const stock = parseFloat(findVal(['مخزونحالي', 'مخزون', 'كمية', 'stock', 'quantite', 'qty']) || 0);
    const min = parseFloat(findVal(['حدتنبيه', 'حدادنى', 'تنبيه', 'stockmin', 'min', 'seuil']) || 0);
    let expiry = findVal(['صلاحية', 'تاريخصلاحية', 'expiration', 'peremption', 'expiry', 'exp']) || '';

    // معالجة تواريخ إكسل الرقمية إن وجدت
    if (typeof expiry === 'number') {
      const dateObj = new Date(Math.round((expiry - 25569) * 86400 * 1000));
      expiry = dateObj.toISOString().substring(0, 10);
    }

    const isExisting = existingProducts.some(p =>
      (barcode && p.barcode === barcode) ||
      (name && p.name.trim().toLowerCase() === String(name).trim().toLowerCase())
    );

    return {
      index: idx + 1,
      name: String(name).trim(),
      category: String(category).trim(),
      barcode,
      unit: String(unit).trim(),
      buy,
      sell,
      stock,
      min,
      expiry: String(expiry).trim(),
      isExisting
    };
  }).filter(p => p.name.length > 0);
}

function renderProductsPreview(products) {
  const area = document.getElementById('productsPreviewArea');
  if (!area) return;
  const ex = t('excel');

  if (!products.length) {
    area.innerHTML = `<div class="alert alert-warning">${ex.errorParse} - لم يتم العثور على أسماء منتجات صالحة في الملف.</div>`;
    return;
  }

  const newCount = products.filter(p => !p.isExisting).length;
  const existCount = products.filter(p => p.isExisting).length;

  area.innerHTML = `
    <div class="alert alert-success">
      <b>${ex.itemsFound}:</b> ${products.length} ${ex.productsFoundCount}
      (<span style="color:#26734D;font-weight:bold;">${newCount} جديد</span>،
       <span style="color:#2874A6;font-weight:bold;">${existCount} موجود مسبقاً</span>)
    </div>

    <div class="table-responsive" style="max-height:350px;overflow-y:auto;">
      <table>
        <thead>
          <tr>
            <th>الحالة</th>
            <th>الاسم</th>
            <th>الصنف</th>
            <th>الباركود</th>
            <th>سعر الشراء</th>
            <th>سعر البيع</th>
            <th>المخزون</th>
            <th>الصلاحية</th>
          </tr>
        </thead>
        <tbody>
          ${products.map(p => `
            <tr>
              <td>${p.isExisting ? '<span class="badge-update">🔄 تحديث</span>' : '<span class="badge-new">✨ جديد</span>'}</td>
              <td style="font-weight:bold;text-align:${currentLang === 'ar' ? 'right' : 'left'};">${p.name}</td>
              <td>${p.category}</td>
              <td><code>${p.barcode || '-'}</code></td>
              <td>${money(p.buy)}</td>
              <td style="font-weight:bold;">${money(p.sell)}</td>
              <td style="font-weight:bold;color:#26734D;">${p.stock} ${p.unit}</td>
              <td>${p.expiry || '-'}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="display:flex;gap:12px;margin-top:15px;justify-content:flex-end;">
      <button class="btn btn-ghost" style="color:var(--text-dark);" onclick="parsedExcelProducts=[];renderExcelTabContent()">${ex.btnCancel}</button>
      <button class="btn btn-success btn-lg" onclick="executeProductsImport()">${ex.btnExecute}</button>
    </div>`;
}

function executeProductsImport() {
  if (!parsedExcelProducts.length) return;
  const updateExisting = document.getElementById('chkUpdateExistingProducts')?.checked;
  const products = DB.get('products');

  let added = 0;
  let updated = 0;

  parsedExcelProducts.forEach(p => {
    const existingIndex = products.findIndex(x =>
      (p.barcode && x.barcode === p.barcode) ||
      (p.name && x.name.toLowerCase() === p.name.toLowerCase())
    );

    if (existingIndex >= 0) {
      if (updateExisting) {
        products[existingIndex] = {
          ...products[existingIndex],
          category: p.category || products[existingIndex].category,
          buy: p.buy > 0 ? p.buy : products[existingIndex].buy,
          sell: p.sell > 0 ? p.sell : products[existingIndex].sell,
          stock: (parseFloat(products[existingIndex].stock) || 0) + p.stock,
          min: p.min > 0 ? p.min : products[existingIndex].min,
          expiry: p.expiry || products[existingIndex].expiry,
          unit: p.unit || products[existingIndex].unit
        };
        updated++;
      }
    } else {
      p.id = DB.nextId('products') + added;
      products.push({
        id: p.id,
        name: p.name,
        category: p.category,
        barcode: p.barcode,
        unit: p.unit,
        buy: p.buy,
        sell: p.sell,
        stock: p.stock,
        min: p.min,
        expiry: p.expiry
      });
      added++;
    }
  });

  DB.set('products', products);
  alert(`🎉 ${t('excel.successProducts')}\n- المنتجات الجديدة: ${added}\n- المنتجات المحدثة: ${updated}`);
  parsedExcelProducts = [];
  showSection('products');
}

// معالجة ملف الفواتير
function handleInvoicesFileUpload(e) {
  if (e.target.files && e.target.files[0]) {
    handleInvoicesFile(e.target.files[0]);
  }
}

function handleInvoicesFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const rawJson = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

      if (!rawJson || rawJson.length === 0) {
        alert(t('excel.errorParse'));
        return;
      }

      parsedExcelInvoices = normalizeInvoicesData(rawJson);
      renderInvoicesPreview(parsedExcelInvoices);
    } catch (err) {
      alert(t('excel.errorParse') + '\n' + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

// توحيد مسميات الأعمدة وتجميع الفواتير المتعددة العناصر
function normalizeInvoicesData(rows) {
  const grouped = {};

  rows.forEach((r, idx) => {
    const keys = Object.keys(r);
    const findVal = (patterns) => {
      for (const k of keys) {
        const cleanK = k.toString().trim().toLowerCase().replace(/[\s_\-]/g, '');
        for (const p of patterns) {
          if (cleanK.includes(p)) return r[k];
        }
      }
      return '';
    };

    let invoiceId = String(findVal(['رقمفاتورة', 'رقم', 'فاتورة', 'numfacture', 'facture', 'invoice', 'id', 'ref']) || '').trim();
    let date = findVal(['تاريخ', 'date']) || todayStr();
    if (typeof date === 'number') {
      date = new Date(Math.round((date - 25569) * 86400 * 1000)).toISOString().substring(0, 10);
    }
    const customer = String(findVal(['عميل', 'زبون', 'اسمزبون', 'client', 'customer']) || t('sales.form.cashCustomer')).trim();
    const productName = String(findVal(['منتج', 'اسممنتج', 'produit', 'product', 'designation', 'article']) || '').trim();
    const qty = parseFloat(findVal(['كمية', 'عدد', 'quantite', 'qty', 'qte']) || 1);
    const price = parseFloat(findVal(['سعر', 'سعرالوحدة', 'prix', 'price', 'pu']) || 0);
    const totalRow = parseFloat(findVal(['اجمالي', 'مبلغ', 'مجموع', 'total', 'montant']) || (qty * price));
    const paidRow = parseFloat(findVal(['مدفوع', 'تسديد', 'paye', 'paid', 'verse']) || totalRow);
    const method = String(findVal(['طريقة', 'دفع', 'mode', 'paiement', 'method']) || 'نقداً').trim();
    const notes = String(findVal(['ملاحظات', 'ملاحظة', 'notes', 'remarque']) || '').trim();

    if (!invoiceId) {
      invoiceId = `INV-${date}-${customer}`;
    }

    if (!grouped[invoiceId]) {
      grouped[invoiceId] = {
        invoiceId,
        date: String(date).substring(0, 10),
        customer,
        method,
        notes,
        total: totalRow,
        paid: paidRow,
        items: []
      };
    }

    if (productName) {
      grouped[invoiceId].items.push({
        name: productName,
        qty: qty || 1,
        price: price || (qty > 0 ? totalRow / qty : totalRow)
      });
    }
  });

  return Object.values(grouped).map(inv => {
    const computedTotal = inv.items.reduce((sum, it) => sum + (it.qty * it.price), 0);
    const finalTotal = computedTotal > 0 ? computedTotal : inv.total;
    return {
      ...inv,
      total: finalTotal,
      paid: inv.paid !== undefined && inv.paid !== '' ? inv.paid : finalTotal,
      due: Math.max(0, finalTotal - (inv.paid || finalTotal))
    };
  });
}

function renderInvoicesPreview(invoices) {
  const area = document.getElementById('invoicesPreviewArea');
  if (!area) return;
  const ex = t('excel');

  if (!invoices.length) {
    area.innerHTML = `<div class="alert alert-warning">${ex.errorParse} - لم يتم العثور على فواتير صالحة.</div>`;
    return;
  }

  const totalSum = invoices.reduce((a, inv) => a + inv.total, 0);

  area.innerHTML = `
    <div class="alert alert-success">
      <b>${ex.itemsFound}:</b> ${invoices.length} ${ex.invoicesFoundCount} بإجمالي <b>${money(totalSum)}</b>
    </div>

    <div class="table-responsive" style="max-height:350px;overflow-y:auto;">
      <table>
        <thead>
          <tr>
            <th>رقم الفاتورة</th>
            <th>التاريخ</th>
            <th>العميل</th>
            <th>عدد المنتجات</th>
            <th>الإجمالي</th>
            <th>المدفوع</th>
            <th>المتبقي</th>
            <th>طريقة الدفع</th>
          </tr>
        </thead>
        <tbody>
          ${invoices.map(inv => `
            <tr>
              <td><b>#${inv.invoiceId}</b></td>
              <td>${inv.date}</td>
              <td style="font-weight:bold;">${inv.customer}</td>
              <td><span style="background:#EDE3D2;padding:2px 8px;border-radius:10px;">${inv.items.length} أصناف</span></td>
              <td style="font-weight:bold;">${money(inv.total)}</td>
              <td style="color:#26734D;">${money(inv.paid)}</td>
              <td style="color:#B33A32;font-weight:bold;">${money(inv.due)}</td>
              <td>${inv.method}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="display:flex;gap:12px;margin-top:15px;justify-content:flex-end;">
      <button class="btn btn-ghost" style="color:var(--text-dark);" onclick="parsedExcelInvoices=[];renderExcelTabContent()">${ex.btnCancel}</button>
      <button class="btn btn-success btn-lg" onclick="executeInvoicesImport()">${ex.btnExecute}</button>
    </div>`;
}

function executeInvoicesImport() {
  if (!parsedExcelInvoices.length) return;

  const deductStock = document.getElementById('chkDeductStock')?.checked;
  const autoCreateCustomers = document.getElementById('chkAutoCreateCustomers')?.checked;

  const sales = DB.get('sales');
  const products = DB.get('products');
  const customers = DB.get('customers');

  let importedCount = 0;

  parsedExcelInvoices.forEach(inv => {
    // التحقق من العميل
    if (autoCreateCustomers && inv.customer && inv.customer !== t('sales.form.cashCustomer')) {
      const existsCust = customers.some(c => c.name.toLowerCase() === inv.customer.toLowerCase());
      if (!existsCust) {
        customers.push({
          id: DB.nextId('customers') + customers.length,
          name: inv.customer,
          phone: '',
          address: '',
          debt: inv.due || 0,
          notes: 'تمت إضافته تلقائياً من استيراد الفواتير'
        });
      }
    }

    // مطابقة المنتجات والخصم من المخزون
    const invoiceItems = inv.items.map(it => {
      const foundProduct = products.find(p => p.name.toLowerCase() === it.name.toLowerCase());
      if (foundProduct && deductStock) {
        foundProduct.stock = Math.max(0, (parseFloat(foundProduct.stock) || 0) - it.qty);
      }
      return {
        productId: foundProduct ? foundProduct.id : null,
        name: it.name,
        qty: it.qty,
        price: it.price
      };
    });

    const newSale = {
      id: DB.nextId('sales') + importedCount,
      date: inv.date,
      customer: inv.customer,
      total: inv.total,
      paid: inv.paid,
      due: inv.due,
      method: inv.method,
      notes: inv.notes,
      items: invoiceItems
    };

    sales.push(newSale);
    importedCount++;
  });

  DB.set('sales', sales);
  if (deductStock) DB.set('products', products);
  if (autoCreateCustomers) DB.set('customers', customers);

  alert(`🎉 ${t('excel.successInvoices')}\n- تم استيراد ${importedCount} فاتورة بنجاح.`);
  parsedExcelInvoices = [];
  showSection('sales');
}

// تبويب نماذج الإكسل الجاهزة
function renderTemplatesTab(container) {
  const ex = t('excel');
  container.innerHTML = `
    <div class="alert alert-info" style="margin-bottom:20px;">
      💡 <b>كيفية الاستخدام:</b> حمّل النموذج المناسب، وقم بفتحه في برنامج Excel أو Google Sheets، ثم املأ البيانات بنفس ترتيب الأعمدة وقم باستيراده في التطبيق مباشرة.
    </div>

    <div class="template-grid">
      <!-- نموذج المنتجات -->
      <div class="template-card">
        <div>
          <span class="template-badge">XLSX & CSV</span>
          <div class="template-card-header">
            <div class="template-icon green">📦</div>
            <h4>${ex.sampleProductsTitle}</h4>
          </div>
          <p class="template-desc">
            ملف جاهز يحتوي على قائمة منتجات نموذجية (بسكويت، شوكولاتة، حلويات، غوفريت، كيك) مع الأسعار، المخزون، الباركود، والصلاحية بالدينار الجزائري.
          </p>
        </div>
        <div class="template-actions">
          <button class="btn btn-sm btn-success" onclick="downloadSampleFile('products')">${ex.downloadBtn}</button>
          <a class="btn btn-sm btn-outline" href="templates/نموذج_المنتجات.csv" download="نموذج_المنتجات.csv">${ex.downloadCsvBtn}</a>
        </div>
      </div>

      <!-- نموذج الفواتير -->
      <div class="template-card">
        <div>
          <span class="template-badge">XLSX & CSV</span>
          <div class="template-card-header">
            <div class="template-icon blue">💰</div>
            <h4>${ex.sampleInvoicesTitle}</h4>
          </div>
          <p class="template-desc">
            نموذج منظم لفواتير المبيعات مع دعم الفواتير متعددة الأصناف، مبالغ الدفع، طرق السداد، وأسماء العملاء.
          </p>
        </div>
        <div class="template-actions">
          <button class="btn btn-sm btn-blue" onclick="downloadSampleFile('invoices')">${ex.downloadBtn}</button>
          <a class="btn btn-sm btn-outline" href="templates/نموذج_الفواتير.csv" download="نموذج_الفواتير.csv">${ex.downloadCsvBtn}</a>
        </div>
      </div>

      <!-- نموذج شامل -->
      <div class="template-card">
        <div>
          <span class="template-badge">شامل ورقتين</span>
          <div class="template-card-header">
            <div class="template-icon gold">📑</div>
            <h4>${ex.sampleAllTitle}</h4>
          </div>
          <p class="template-desc">
            ملف إكسل كامل يتضمن ورقتي عمل: ورقة "المنتجات" وورقة "الفواتير" معاً للبدء الفوري بكل سهولة.
          </p>
        </div>
        <div class="template-actions">
          <button class="btn btn-sm btn-gold" onclick="downloadSampleFile('all')">${ex.downloadBtn}</button>
        </div>
      </div>
    </div>

    <!-- جدول شرح الأعمدة المطلوبة -->
    <div style="margin-top:30px;">
      <h3 style="font-size:16px;margin-bottom:12px;color:var(--text-dark);">📋 دليل أعمدة ملفات الإكسل المدعومة:</h3>
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>النوع</th>
              <th>العمود في الملف</th>
              <th>المسميات البديلة المقبولة</th>
              <th>أهمية الحقل</th>
              <th>مثال توضيحي</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>المنتجات</b></td>
              <td><b>اسم_المنتج</b></td>
              <td>الاسم، Produit، Designation، Name</td>
              <td><span style="color:#B33A32;font-weight:bold;">إجباري</span></td>
              <td>بسكويت ماكسي شوكولا 120غ</td>
            </tr>
            <tr>
              <td><b>المنتجات</b></td>
              <td><b>سعر_البيع</b></td>
              <td>سعر البيع، Prix vente، Price</td>
              <td><span style="color:#26734D;font-weight:bold;">موصى به</span></td>
              <td>60.00</td>
            </tr>
            <tr>
              <td><b>المنتجات</b></td>
              <td><b>المخزون</b></td>
              <td>الكمية، Stock، Qty</td>
              <td><span style="color:#26734D;font-weight:bold;">موصى به</span></td>
              <td>150</td>
            </tr>
            <tr>
              <td><b>المنتجات</b></td>
              <td><b>الباركود</b></td>
              <td>Code-barres، Barcode، كود</td>
              <td>اختياري</td>
              <td>6131234567890</td>
            </tr>
            <tr>
              <td><b>الفواتير</b></td>
              <td><b>رقم_الفاتورة</b></td>
              <td>الرقم، Facture، Invoice</td>
              <td><span style="color:#B33A32;font-weight:bold;">إجباري</span></td>
              <td>1001</td>
            </tr>
            <tr>
              <td><b>الفواتير</b></td>
              <td><b>اسم_العميل</b></td>
              <td>الزبون، Client، Customer</td>
              <td><span style="color:#26734D;font-weight:bold;">موصى به</span></td>
              <td>متجر البركة للحلويات</td>
            </tr>
            <tr>
              <td><b>الفواتير</b></td>
              <td><b>اسم_المنتج</b></td>
              <td>السلعة، Produit، Product</td>
              <td><span style="color:#B33A32;font-weight:bold;">إجباري</span></td>
              <td>غوفريت محشو فانيليا 45غ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`;
}

// دالة تنزيل ملفات النماذج
function downloadSampleFile(type) {
  if (type === 'products') {
    window.location.href = 'templates/نموذج_المنتجات_Trafik_Saveurs.xlsx';
  } else if (type === 'invoices') {
    window.location.href = 'templates/نموذج_الفواتير_Trafik_Saveurs.xlsx';
  } else if (type === 'all') {
    window.location.href = 'templates/نموذج_شامل_المنتجات_والفواتير_Trafik_Saveurs.xlsx';
  }
}

// ============================================
// شاشة تطبيق أندرويد ودليل التثبيت
// ============================================
function loadAndroidApp() {
  const an = t('android');
  content.innerHTML = `
    <div class="section-title">
      <div>
        <span>${an.title}</span>
        <div style="font-size:12px;color:var(--text-muted);font-weight:normal;margin-top:4px;">${an.sub}</div>
      </div>
      <div class="section-actions">
        <button class="btn btn-success" onclick="triggerAndroidInstall()">📲 ${t('install_app_btn')}</button>
      </div>
    </div>

    <!-- بطاقة الحالة السريعة للتطبيق على أندرويد -->
    <div class="card" style="border-top-color:#26734D;margin-bottom:20px;background:linear-gradient(135deg, #FFF, #F9F5EC);">
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <img src="icons/icon-192.png" alt="App Icon" style="width:64px;height:64px;border-radius:16px;box-shadow:0 4px 12px rgba(0,0,0,0.15);">
        <div style="flex:1;">
          <h3 style="margin:0 0 4px 0;font-size:18px;color:var(--text-dark);">Trafik Saveurs للأندرويد</h3>
          <p style="margin:0;font-size:13px;color:var(--text-muted);">
            تطبيق هجين معتمد (PWA & APK ready) متوافق مع كافة هواتف Samsung, Xiaomi, Oppo, Realme, Infinix وكافة أجهزة أندرويد اللوحية.
          </p>
        </div>
        <button class="btn btn-gold btn-lg" onclick="triggerAndroidInstall()">📲 تثبيت فوري على هاتفي</button>
      </div>
    </div>

    <div class="android-guide-grid">
      <!-- الخطوة 1 -->
      <div class="android-step-card">
        <div class="step-num-badge">1</div>
        <h4>${an.cardPwaTitle}</h4>
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px;">${an.cardPwaDesc}</p>
        <ol>
          ${an.pwaSteps.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>

      <!-- الخطوة 2 -->
      <div class="android-step-card" style="border-top-color:#2874A6;">
        <div class="step-num-badge" style="background:#2874A6;">2</div>
        <h4>${an.cardApkTitle}</h4>
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px;">${an.cardApkDesc}</p>
        <ol>
          ${an.apkSteps.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>

      <!-- الخطوة 3 -->
      <div class="android-step-card" style="border-top-color:#E9A900;">
        <div class="step-num-badge" style="background:#E9A900;color:#2D160E;">3</div>
        <h4>${an.cardOfflineTitle}</h4>
        <ul style="list-style-type:none;padding:0;">
          ${an.offlineFeatures.map(f => `<li style="margin-bottom:10px;">${f}</li>`).join('')}
        </ul>
      </div>
    </div>`;
}

// ============================================
// إدارة العملاء
// ============================================
function loadCustomers() {
  content.innerHTML = `
    <div class="section-title">
      <span>${t('customers.title')}</span>
      <div class="section-actions">
        <button class="btn btn-success" onclick="customerForm()">${t('customers.add')}</button>
        <button class="btn btn-gold" onclick="payDebtForm()">${t('customers.payDebt')}</button>
      </div>
    </div>
    <div class="search-box">
      <input type="text" id="searchCustomer" placeholder="${t('customers.search')}" oninput="renderCustomersList()">
    </div>
    <div id="customersList"></div>`;
  renderCustomersList();
}

function renderCustomersList() {
  const query = (document.getElementById('searchCustomer')?.value || '').toLowerCase();
  const list = DB.get('customers').filter(c =>
    !query || c.name.toLowerCase().includes(query) || (c.phone || '').includes(query)
  );
  const th = t('customers.th');
  document.getElementById('customersList').innerHTML = `
    <div class="table-responsive">
      <table>
        <thead><tr><th>${th.num}</th><th>${th.name}</th><th>${th.phone}</th><th>${th.address}</th><th>${th.debt}</th><th>${th.actions}</th></tr></thead>
        <tbody>${list.map(c => `
          <tr>
            <td>${c.id}</td>
            <td style="font-weight:bold;">${c.name}</td>
            <td>${c.phone || '-'}</td>
            <td>${c.address || '-'}</td>
            <td style="color:${c.debt > 0 ? '#B33A32' : '#26734D'};font-weight:bold;">${money(c.debt)}</td>
            <td>
              <button class="btn btn-sm" onclick='customerForm(${c.id})'>${t('products.edit')}</button>
              <button class="btn btn-sm btn-danger" onclick="delCustomer(${c.id})">${t('products.delete')}</button>
            </td>
          </tr>`).join('') || `<tr><td colspan="6" class="no-results">${t('customers.empty')}</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function customerForm(id = null) {
  const f = t('customers.form');
  const c = id ? DB.get('customers').find(x => x.id == id) : {};
  openModal(`
    <h3>${id ? f.edit : f.add}</h3>
    <div class="form-group"><label>${f.name}</label><input id="c_name" value="${c.name || ''}" placeholder="اسم العميل أو المتجر"></div>
    <div class="form-row">
      <div class="form-group"><label>${f.phone}</label><input id="c_phone" value="${c.phone || ''}" placeholder="05/06/07..."></div>
      <div class="form-group"><label>${f.address}</label><input id="c_addr" value="${c.address || ''}" placeholder="المدينة / الحي"></div>
    </div>
    <div class="form-group"><label>${f.notes}</label><textarea id="c_notes" rows="2">${c.notes || ''}</textarea></div>
    <div style="display:flex;gap:10px;margin-top:15px;justify-content:flex-end;">
      <button class="btn btn-ghost" style="color:var(--text-dark);" onclick="closeModal()">${f.cancel}</button>
      <button class="btn btn-success" onclick='saveCustomer(${id || "null"})'>${f.save}</button>
    </div>`);
}

function saveCustomer(id) {
  const f = t('customers.form');
  const data = {
    name: document.getElementById('c_name').value.trim(),
    phone: document.getElementById('c_phone').value.trim(),
    address: document.getElementById('c_addr').value.trim(),
    notes: document.getElementById('c_notes').value.trim()
  };
  if (!data.name) { alert(f.required); return; }

  const customers = DB.get('customers');
  const duplicate = customers.find(c => c.id != id && c.name.toLowerCase() === data.name.toLowerCase());
  if (duplicate) { alert(t('customers.duplicate')); return; }

  if (id) {
    const idx = customers.findIndex(c => c.id == id);
    customers[idx] = { ...customers[idx], ...data };
  } else {
    data.id = DB.nextId('customers');
    data.debt = 0;
    customers.push(data);
  }
  DB.set('customers', customers);
  closeModal();
  renderCustomersList();
}

function delCustomer(id) {
  if (confirm(t('customers.confirmDelete'))) {
    DB.set('customers', DB.get('customers').filter(c => c.id != id));
    renderCustomersList();
  }
}

function payDebtForm() {
  const f = t('customers.payForm');
  const customers = DB.get('customers').filter(c => (parseFloat(c.debt) || 0) > 0);
  if (!customers.length) { alert(f.noDebt); return; }

  openModal(`
    <h3>${f.title}</h3>
    <div class="form-group">
      <label>${f.customer}</label>
      <select id="p_debt_cust">${customers.map(c => `<option value="${c.id}">${c.name} (الديون: ${money(c.debt)})</option>`).join('')}</select>
    </div>
    <div class="form-group">
      <label>${f.amount}</label>
      <input id="p_debt_amt" type="number" step="0.01">
    </div>
    <div style="display:flex;gap:10px;margin-top:15px;justify-content:flex-end;">
      <button class="btn btn-ghost" style="color:var(--text-dark);" onclick="closeModal()">${f.cancel}</button>
      <button class="btn btn-success" onclick="saveDebtPayment()">${f.confirm}</button>
    </div>`);
}

function saveDebtPayment() {
  const f = t('customers.payForm');
  const id = document.getElementById('p_debt_cust').value;
  const amt = parseFloat(document.getElementById('p_debt_amt').value) || 0;
  if (amt <= 0) { alert(f.invalidAmount); return; }

  const customers = DB.get('customers');
  const cust = customers.find(c => c.id == id);
  if (cust) {
    cust.debt = Math.max(0, (parseFloat(cust.debt) || 0) - amt);
    DB.set('customers', customers);
  }
  closeModal();
  alert(f.success);
  renderCustomersList();
}

// ============================================
// سجل المشتريات
// ============================================
let purchItems = [];

function loadPurchases() {
  content.innerHTML = `
    <div class="section-title">
      <span>${t('purchases.title')}</span>
      <button class="btn btn-success" onclick="purchForm()">${t('purchases.add')}</button>
    </div>
    <div class="search-box">
      <input type="text" id="searchPurch" placeholder="${t('purchases.search')}" oninput="renderPurchasesList()">
    </div>
    <div id="purchList"></div>`;
  renderPurchasesList();
}

function renderPurchasesList() {
  const query = (document.getElementById('searchPurch')?.value || '').toLowerCase();
  const list = DB.get('purchases').filter(p => !query || p.supplier.toLowerCase().includes(query)).reverse();
  const th = t('purchases.th');
  document.getElementById('purchList').innerHTML = `
    <div class="table-responsive">
      <table>
        <thead><tr><th>${th.num}</th><th>${th.date}</th><th>${th.supplier}</th><th>${th.total}</th><th>${th.paid}</th><th>${th.due}</th></tr></thead>
        <tbody>${list.map(p => `<tr><td>#${p.id}</td><td>${p.date}</td><td>${p.supplier}</td><td>${money(p.total)}</td><td>${money(p.paid)}</td><td style="color:#B33A32;">${money(p.due)}</td></tr>`).join('') || `<tr><td colspan="6" class="no-results">${t('purchases.empty')}</td></tr>`}</tbody>
      </table>
    </div>`;
}

function purchForm() {
  purchItems = [];
  const f = t('purchases.form');
  const products = DB.get('products');
  openModal(`
    <h3>${f.title}</h3>
    <div class="form-row">
      <div class="form-group"><label>${f.supplier}</label><input id="pu_sup" placeholder="اسم المورد أو المصنع"></div>
      <div class="form-group"><label>${f.date}</label><input id="pu_date" type="date" value="${todayStr()}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.product}</label><select id="pu_prod">${products.map(p => `<option value="${p.id}" data-name="${p.name}">${p.name}</option>`).join('')}</select></div>
      <div class="form-group"><label>${f.qty}</label><input id="pu_qty" type="number" step="0.01" value="1"></div>
    </div>
    <div class="form-group"><label>${f.cost}</label><input id="pu_cost" type="number" step="0.01"></div>
    <button class="btn btn-outline" style="width:100%;margin-bottom:10px;" onclick="addPurchItem()">${f.addItem}</button>
    <div class="items-list" id="purchItemsList"></div>
    <div class="form-group" style="margin-top:10px;"><label>${f.paid}</label><input id="pu_paid" type="number" step="0.01" value="0"></div>
    <div class="total-bar"><span>الإجمالي:</span><span id="purchTotal">0.00</span></div>
    <div style="display:flex;gap:10px;margin-top:15px;justify-content:flex-end;">
      <button class="btn btn-ghost" style="color:var(--text-dark);" onclick="closeModal()">${f.cancel}</button>
      <button class="btn btn-success" onclick="savePurch()">${f.save}</button>
    </div>`);
}

function addPurchItem() {
  const sel = document.getElementById('pu_prod');
  const id = sel.value;
  const name = sel.options[sel.selectedIndex].dataset.name;
  const qty = parseFloat(document.getElementById('pu_qty').value);
  const cost = parseFloat(document.getElementById('pu_cost').value);
  if (!qty || !cost) return;
  purchItems.push({ productId: id, name, qty, cost });
  renderPurchItems();
}

function renderPurchItems() {
  let total = 0;
  const html = purchItems.map((it, i) => {
    const sub = it.qty * it.cost;
    total += sub;
    return `<div class="item-row"><span>${it.name} × ${it.qty} = ${money(sub)}</span><button class="btn btn-sm btn-danger" onclick="purchItems.splice(${i},1);renderPurchItems()">×</button></div>`;
  }).join('');
  document.getElementById('purchItemsList').innerHTML = html || 'لم تتم إضافة منتجات';
  document.getElementById('purchTotal').innerText = money(total);
  document.getElementById('pu_paid').value = total.toFixed(2);
}

function savePurch() {
  const f = t('purchases.form');
  if (!purchItems.length) { alert(f.noItems); return; }
  const total = purchItems.reduce((a, it) => a + it.qty * it.cost, 0);
  const paid = parseFloat(document.getElementById('pu_paid').value) || 0;
  const purch = {
    id: DB.nextId('purchases'),
    supplier: document.getElementById('pu_sup').value || 'مورد عام',
    date: document.getElementById('pu_date').value,
    total,
    paid,
    due: total - paid,
    items: [...purchItems]
  };

  const products = DB.get('products');
  purchItems.forEach(it => {
    const p = products.find(x => x.id == it.productId);
    if (p) {
      p.stock = (parseFloat(p.stock) || 0) + it.qty;
      p.buy = it.cost;
    }
  });
  DB.set('products', products);

  const purchases = DB.get('purchases');
  purchases.push(purch);
  DB.set('purchases', purchases);

  closeModal();
  renderPurchasesList();
}

// ============================================
// المصاريف
// ============================================
function loadExpenses() {
  content.innerHTML = `
    <div class="section-title">
      <span>${t('expenses.title')}</span>
      <button class="btn btn-success" onclick="expenseForm()">${t('expenses.add')}</button>
    </div>
    <div class="search-box">
      <input type="text" id="searchExpense" placeholder="${t('expenses.search')}" oninput="renderExpensesList()">
    </div>
    <div id="expenseList"></div>`;
  renderExpensesList();
}

function renderExpensesList() {
  const query = (document.getElementById('searchExpense')?.value || '').toLowerCase();
  const list = DB.get('expenses').filter(e => !query || e.desc.toLowerCase().includes(query)).reverse();
  const th = t('expenses.th');
  document.getElementById('expenseList').innerHTML = `
    <div class="table-responsive">
      <table>
        <thead><tr><th>${th.num}</th><th>${th.date}</th><th>${th.desc}</th><th>${th.amount}</th><th>${th.notes}</th><th>${th.actions}</th></tr></thead>
        <tbody>${list.map(e => `
          <tr>
            <td>${e.id}</td>
            <td>${e.date}</td>
            <td style="font-weight:bold;">${e.desc}</td>
            <td style="color:#B33A32;font-weight:bold;">${money(e.amount)}</td>
            <td>${e.notes || '-'}</td>
            <td><button class="btn btn-sm btn-danger" onclick="delExpense(${e.id})">${t('products.delete')}</button></td>
          </tr>`).join('') || `<tr><td colspan="6" class="no-results">${t('expenses.empty')}</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function expenseForm() {
  const f = t('expenses.form');
  openModal(`
    <h3>${f.title}</h3>
    <div class="form-group"><label>${f.desc}</label><input id="e_desc" placeholder="نقل، وقود، إيجار، كهرباء..."></div>
    <div class="form-row">
      <div class="form-group"><label>${f.amount}</label><input id="e_amt" type="number" step="0.01"></div>
      <div class="form-group"><label>${f.date}</label><input id="e_date" type="date" value="${todayStr()}"></div>
    </div>
    <div class="form-group"><label>${f.notes}</label><input id="e_notes"></div>
    <div style="display:flex;gap:10px;margin-top:15px;justify-content:flex-end;">
      <button class="btn btn-ghost" style="color:var(--text-dark);" onclick="closeModal()">${f.cancel}</button>
      <button class="btn btn-success" onclick="saveExpense()">${f.save}</button>
    </div>`);
}

function saveExpense() {
  const f = t('expenses.form');
  const desc = document.getElementById('e_desc').value.trim();
  const amount = parseFloat(document.getElementById('e_amt').value) || 0;
  if (!desc || amount <= 0) { alert(f.required); return; }

  const expenses = DB.get('expenses');
  expenses.push({
    id: DB.nextId('expenses'),
    desc,
    amount,
    date: document.getElementById('e_date').value,
    notes: document.getElementById('e_notes').value
  });
  DB.set('expenses', expenses);
  closeModal();
  renderExpensesList();
}

function delExpense(id) {
  if (confirm(t('expenses.confirmDelete'))) {
    DB.set('expenses', DB.get('expenses').filter(e => e.id != id));
    renderExpensesList();
  }
}

// ============================================
// التقارير
// ============================================
function loadReports() {
  const now = new Date();
  const startMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().substring(0, 10);
  const endMonth = todayStr();

  content.innerHTML = `
    <div class="section-title">
      <span>${t('reports.title')}</span>
      <button class="btn btn-blue" onclick="exportReportCSV()">${t('reports.export')}</button>
    </div>
    <div class="card" style="margin-bottom:20px;">
      <div class="form-row">
        <div class="form-group"><label>${t('reports.from')}</label><input id="r_start" type="date" value="${startMonth}"></div>
        <div class="form-group"><label>${t('reports.to')}</label><input id="r_end" type="date" value="${endMonth}"></div>
      </div>
      <button class="btn btn-gold" onclick="showReport()">${t('reports.show')}</button>
    </div>
    <div id="reportResult"></div>`;
  showReport();
}

function showReport() {
  const start = document.getElementById('r_start').value;
  const end = document.getElementById('r_end').value;
  if (!start || !end) { alert(t('reports.invalidDates')); return; }

  const sales = DB.get('sales').filter(s => s.date >= start && s.date <= end);
  const purchases = DB.get('purchases').filter(p => p.date >= start && p.date <= end);
  const expenses = DB.get('expenses').filter(e => e.date >= start && e.date <= end);

  const totalSales = sales.reduce((a, s) => a + (parseFloat(s.total) || 0), 0);
  const totalPaid = sales.reduce((a, s) => a + (parseFloat(s.paid) || 0), 0);
  const totalPurchases = purchases.reduce((a, p) => a + (parseFloat(p.total) || 0), 0);
  const totalExpenses = expenses.reduce((a, e) => a + (parseFloat(e.amount) || 0), 0);
  const profit = totalSales - totalPurchases - totalExpenses;

  document.getElementById('reportResult').innerHTML = `
    <div class="cards">
      <div class="card"><div class="title">${t('reports.totalSales')}</div><div class="value">${money(totalSales)}</div></div>
      <div class="card green"><div class="title">${t('reports.totalPaid')}</div><div class="value">${money(totalPaid)}</div></div>
      <div class="card"><div class="title">${t('reports.totalPurchases')}</div><div class="value">${money(totalPurchases)}</div></div>
      <div class="card"><div class="title">${t('reports.totalExpenses')}</div><div class="value">${money(totalExpenses)}</div></div>
      <div class="card ${profit >= 0 ? 'green' : 'red'}"><div class="title">${t('reports.profit')}</div><div class="value">${money(profit)}</div></div>
      <div class="card blue"><div class="title">${t('reports.operations')}</div><div class="value">${sales.length + purchases.length + expenses.length}</div></div>
    </div>
    <div class="alert alert-warning">${t('reports.note')}</div>`;
}

function exportReportCSV() {
  const start = document.getElementById('r_start').value;
  const end = document.getElementById('r_end').value;
  const sales = DB.get('sales').filter(s => s.date >= start && s.date <= end);
  const purchases = DB.get('purchases').filter(p => p.date >= start && p.date <= end);
  const expenses = DB.get('expenses').filter(e => e.date >= start && e.date <= end);

  let csv = '\uFEFFDate;Type;Reference;Montant;Payé;Reste\n';
  sales.forEach(s => csv += `${s.date};Vente;#${s.id};${s.total};${s.paid};${s.due}\n`);
  purchases.forEach(p => csv += `${p.date};Achat;#${p.id};${p.total};${p.paid};${p.due}\n`);
  expenses.forEach(e => csv += `${e.date};Depense;${e.desc};${e.amount};${e.amount};0\n`);

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `rapport_${start}_${end}.csv`;
  a.click();
}

// ============================================
// النسخ الاحتياطي
// ============================================
function loadBackup() {
  content.innerHTML = `
    <div class="section-title">${t('backup.title')}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:20px;">
      <div class="card">
        <div class="title" style="font-size:16px;">${t('backup.exportTitle')}</div>
        <p style="margin:10px 0;color:var(--text-muted);font-size:13px;">${t('backup.exportDesc')}</p>
        <button class="btn btn-success" onclick="doExport()">${t('backup.exportBtn')}</button>
      </div>
      <div class="card">
        <div class="title" style="font-size:16px;">${t('backup.importTitle')}</div>
        <p style="margin:10px 0;color:var(--text-muted);font-size:13px;">${t('backup.importWarn')}</p>
        <input type="file" id="importFile" accept=".json" style="margin:10px 0;">
        <br>
        <button class="btn btn-danger" onclick="doImport()">${t('backup.importBtn')}</button>
      </div>
    </div>
    <div class="alert alert-warning" style="margin-top:20px;">${t('backup.tip')}</div>`;
}

function doExport() {
  const data = {
    version: '1.1',
    exportDate: new Date().toISOString(),
    products: DB.get('products'),
    customers: DB.get('customers'),
    sales: DB.get('sales'),
    purchases: DB.get('purchases'),
    expenses: DB.get('expenses'),
    settings: DB.getObj('settings')
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `TrafikSaveurs_Backup_${todayStr()}.json`;
  a.click();
  alert('✅ تم تصدير النسخة الاحتياطية بنجاح!');
}

function doImport() {
  const fileInput = document.getElementById('importFile');
  if (!fileInput.files.length) { alert(t('common.chooseFile')); return; }
  if (!confirm(t('common.confirmReplace'))) return;

  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.products) DB.set('products', data.products);
      if (data.customers) DB.set('customers', data.customers);
      if (data.sales) DB.set('sales', data.sales);
      if (data.purchases) DB.set('purchases', data.purchases);
      if (data.expenses) DB.set('expenses', data.expenses);
      if (data.settings) DB.setObj('settings', data.settings);

      alert(`✅ تم الاستيراد بنجاح!\n- المنتجات: ${data.products?.length || 0}\n- العملاء: ${data.customers?.length || 0}\n- المبيعات: ${data.sales?.length || 0}`);
      loadDashboard();
    } catch (err) {
      alert('❌ خطأ: ' + err.message);
    }
  };
  reader.readAsText(fileInput.files[0]);
}

// ============================================
// الإعدادات
// ============================================
function loadSettings() {
  const s = DB.getObj('settings');
  content.innerHTML = `
    <div class="section-title">${t('settings.title')}</div>
    <div class="card" style="max-width:600px;">
      <div class="form-group"><label>${t('settings.companyName')}</label><input id="st_name" value="${s['اسم_الشركة'] || ''}"></div>
      <div class="form-group"><label>${t('settings.currency')}</label><input id="st_cur" value="${s['العملة'] || 'دج'}"></div>
      <div class="form-group"><label>${t('settings.phone')}</label><input id="st_phone" value="${s['الهاتف'] || ''}"></div>
      <div class="form-group"><label>${t('settings.address')}</label><input id="st_addr" value="${s['العنوان'] || ''}"></div>
      <div class="form-group"><label>${t('settings.userName')}</label><input id="st_user" value="${s['اسم_المستخدم'] || ''}"></div>
      <button class="btn btn-success" onclick="saveSettings()">${t('settings.save')}</button>
    </div>`;
}

function saveSettings() {
  const data = {
    'اسم_الشركة': document.getElementById('st_name').value,
    'العملة': document.getElementById('st_cur').value,
    'الهاتف': document.getElementById('st_phone').value,
    'العنوان': document.getElementById('st_addr').value,
    'اسم_المستخدم': document.getElementById('st_user').value
  };
  DB.setObj('settings', data);
  alert(t('settings.saved'));
}

// ============================================
// تحويل التاريخ الميلادي إلى هجري
// ============================================
function gregorianToHijri(date) {
  const hijriMonths = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
  const jd = Math.floor((date.getTime() / 86400000) + 2440587.5);
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l2 = l - 10631 * n + 354;
  const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) + Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
  const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor((24 * l3) / 709);
  const day = l3 - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;
  return `${day} ${hijriMonths[month - 1]} ${year} هـ`;
}

// ============================================
// تسجيل Service Worker للعمل أوفلاين
// ============================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      console.log('Trafik Saveurs Service Worker registered:', reg.scope);
    }).catch(err => {
      console.warn('Service Worker registration error:', err);
    });
  });
}

// ============================================
// بدء التشغيل
// ============================================
applyLang();
showSection('dashboard');
